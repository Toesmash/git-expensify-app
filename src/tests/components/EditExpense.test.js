import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let startEditExpenseSpy, startRemoveExpenseSpy, history, wrapper;

beforeEach(() => {
   startEditExpenseSpy = jest.fn();
   startRemoveExpenseSpy = jest.fn();
   history = { push: jest.fn() };
   wrapper = shallow(
      <EditExpense
         startEditExpense={startEditExpenseSpy}
         startRemoveExpense={startRemoveExpenseSpy}
         history={history}
         expense={expenses[2]}
      />
   );
});


test('Should render EditExpense correctly', () => {
   expect(wrapper).toMatchSnapshot();
});

test('Should editExpense correctly', () => {
   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('Should startRemoveExpenseSpy correctly', () => {
   wrapper.find('button').simulate('click');
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({
      id: expenses[2].id
   });
});
