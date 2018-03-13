import uuid from 'uuid';
import database from '../firebase/firebase';

// ADDING EXPENSES ================================================
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};



// REMOVE EXPENSES ================================================
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

export const startRemoveExpense = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }))
    });
  };
};



// EDIT EXPENSES ================================================
export const editExpense = (id, update) => ({
  type: 'EDIT_EXPENSE',
  id,
  update
});


export const startEditExpense = (id, update) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update({ ...update }).then(() => {
      dispatch(editExpense(id, update));
    });
  };
};



// SET EXPENSES ================================================
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses: expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const fetchExpenses = [];
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/expenses`)
      .once('value')
      .then((snapshot) => {
        snapshot.forEach(element => {
          fetchExpenses.push({
            id: element.key,
            ...element.val()
          });
        });

        dispatch(setExpenses(fetchExpenses));
      })
  };
};