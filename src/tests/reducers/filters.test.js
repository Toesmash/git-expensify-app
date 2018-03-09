import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should setup defualt filter values', () => {

   const state = filtersReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual({
      text: '',
      sortBy: 'amount',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
   })
});


test('Should set sortBy to amount', () => {
   const currentState = {
      text: '',
      startDate: undefined,
      endDate: undefined,
      sortBy: 'date'
   };
   const action = {
      type: 'SORT_BY_AMOUNT'
   };

   const state = filtersReducer(currentState, action);


   expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
   const currentState = {
      text: '',
      startDate: undefined,
      endDate: undefined,
      sortBy: 'amount'
   };
   const action = {
      type: 'SORT_BY_DATE'
   };

   const state = filtersReducer(currentState, action);
   expect(state.sortBy).toBe('date');

});


// case 'SET_TEXT_FILTER':
// return {
//     ...state,
//     text: action.text
// };
test('Should set text filter', () => {
   const action = {
      type: 'SET_TEXT_FILTER',
      text: 'some text'
   }
   const state = filtersReducer(undefined, action);
   expect(state.text).toBe('some text');

});

test('Should set start date filter', () => {
   const action = {
      type: 'SET_START_DATE',
      date: moment(0)
   }

   const state = filtersReducer(undefined, action);
   expect(state.startDate).toEqual(moment(0));
});

test('Should set end date filter', () => {
   const action = {
      type: 'SET_END_DATE',
      date: moment(0)
   }

   const state = filtersReducer(undefined, action);
   expect(state.endDate).toEqual(moment(0));

});