import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
   const state = expensesReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
   const action = {
      type: 'REMOVE_EXPENSE',
      id: '2'
   }

   const state = expensesReducer(expenses, action);
   expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should NOT remove expense by incorrect id', () => {
   const action = {
      type: 'REMOVE_EXPENSE',
      id: '-1'
   }

   const state = expensesReducer(expenses, action);
   expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
   const action = {
      type: 'ADD_EXPENSE',
      expense: {
         id: '109',
         description: 'Helloo',
         note: 'No note',
         amount: 150,
         createdAt: 0
      }
   }

   const state = expensesReducer(expenses, action);
   expect(state).toEqual([...expenses, {
      id: '109',
      description: 'Helloo',
      note: 'No note',
      amount: 150,
      createdAt: 0
   }])
});

test('Should edit expense by id and update', () => {
   const action = {
      type: 'EDIT_EXPENSE',
      id: '1',
      update: {
         amount: 7777,
         note: 'Sick note'
      }
   }
   const state = expensesReducer(expenses, action);

   expect(state).toEqual([{
      id: '1',
      description: 'Gum',
      note: 'Sick note',
      amount: 7777,
      createdAt: 0
   }, expenses[1], expenses[2]])

});

test('Should NOT edit expense the expense when ID not found', () => {
   const action = {
      type: 'EDIT_EXPENSE',
      id: '-1',
      update: {
         note: 'Sick note'
      }
   }
   const state = expensesReducer(expenses, action);

   expect(state).toEqual(expenses);

});