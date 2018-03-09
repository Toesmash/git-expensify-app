import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should render ExpenseForm correctly', () => {
   const wrapper = shallow(<ExpenseForm />);
   expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with expense data', () => {
   const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
   expect(wrapper).toMatchSnapshot();
});

test('Shoul render error for invalid form submission', () => {
   const wrapper = shallow(<ExpenseForm />);
   expect(wrapper).toMatchSnapshot();
   wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
   });

   expect(wrapper.state('error').length).toBeGreaterThan(0);
   expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', () => {
   const wrapper = shallow(<ExpenseForm />);
   const value = 'New description';
   wrapper.find('input').at(0).simulate('change', {
      target: {
         value: value
      }
   });

   expect(wrapper.state('description')).toBe(value);
});

test('Should set note on textArea change', () => {
   const wrapper = shallow(<ExpenseForm />);
   const value = 'New note';
   wrapper.find('textarea').simulate('change', {
      target: {
         value: value
      }
   });

   expect(wrapper.state('note')).toBe(value);
});


test('Should set amount with VALID input', () => {
   const wrapper = shallow(<ExpenseForm />);
   const amountValue = '12312315.77';

   wrapper.find('input').at(1).simulate('change', {
      target: {
         value: amountValue
      }
   })

   expect(wrapper.state('amount')).toBe(amountValue);
   expect(wrapper).toMatchSnapshot();
});


test('Should NOT set amount with INVALID input', () => {
   const wrapper = shallow(<ExpenseForm />);
   const amountValue = '155.123';

   wrapper.find('input').at(1).simulate('change', {
      target: {
         value: amountValue
      }
   });

   expect(wrapper.state('amount')).toBe('');
});


test('Should call onSubmit prop for valid form submition', () => {
   const onSubmitSpy = jest.fn();
   const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

   wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
   });

   expect(wrapper.state('error').length).toBe(0);
   expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: expenses[0].description,
      amount: expenses[0].amount,
      note: expenses[0].note,
      createdAt: expenses[0].createdAt
   });
   expect(wrapper).toMatchSnapshot();
});

test('Should set new date onDateChange', () => {
   const now = moment();
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('SingleDatePicker').prop('onDateChange')(now);
   expect(wrapper.state('createdAt')).toEqual(now);

});

test('Should set new date onFocusChange', () => {
   const focused = true;
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
   expect(wrapper.state('calendarFocused')).toBe(focused);

});