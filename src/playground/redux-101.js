import { createStore } from 'redux';

// Action generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
}
);

const decremedCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decremedBy: decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ setTo = 0 } = {}) => ({
    type: 'SET',
    count: setTo
});

// REDUCETS
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            const decremedBy = typeof action.decremedBy === 'number' ? action.decremedBy : 1;
            return {
                count: state.count - decremedBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(incrementCount({ incrementBy: 1231 }))

store.dispatch(resetCount());

store.dispatch(decremedCount());
store.dispatch(decremedCount({ decrementBy: 10 }));

store.dispatch(setCount({ setTo: 101 }));


