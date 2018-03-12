const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            const newState = state.filter((option) => {
                return action.id !== option.id;
            })
            return newState;
        case 'EDIT_EXPENSE':
            return state.map((expense) => {

                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.update
                    }
                }
                else {
                    return expense;
                }
            });
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};

export default expensesReducer;