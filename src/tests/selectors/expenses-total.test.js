import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('Should return total of no expenses', () => {
   const total = getExpensesTotal([]);
   expect(total).toEqual(0);
});

test('Should return total of one expense', () => {
   const total = getExpensesTotal([expenses[2]]);
   expect(total).toEqual(expenses[2].amount);
});

test('Should return total of filtered expenses', () => {
   const total = getExpensesTotal(expenses);
   expect(total).toEqual(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});
