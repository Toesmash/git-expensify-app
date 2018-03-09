import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let editExpenseSpy, removeExpenseSpy, history, wrapper;

beforeEach(() => {
   editExpenseSpy = jest.fn();
   removeExpenseSpy = jest.fn();
   history = { push: jest.fn() };
   wrapper = shallow(
      <EditExpense
         editExpense={editExpenseSpy}
         removeExpense={removeExpenseSpy}
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
   expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('Should removeExpense correctly', () => {
   wrapper.find('button').simulate('click');
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(removeExpenseSpy).toHaveBeenLastCalledWith({
      id: expenses[2].id
   });
});
