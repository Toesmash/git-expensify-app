import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('Should generate setStartDate object', () => {
   const action = setStartDate(moment(0));
   expect(action).toEqual({
      type: 'SET_START_DATE',
      date: moment(0)
   })
});

test('Should generate setEndDate object', () => {
   const action = setEndDate(moment(0));
   expect(action).toEqual({
      type: 'SET_END_DATE',
      date: moment(0)
   })
});

test('Should generate setTextFilter object with text value', () => {
   const action = setTextFilter('Something');
   expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: 'Something'
   });
});


test('Should generate setTextFilter object without text value', ()=>{
   const action = setTextFilter();
   expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: ''
   });
});

test('Should generate sortByAmount object', () => {
   const action = sortByAmount();
   expect(action).toEqual({
      type: 'SORT_BY_AMOUNT'
   })
});

test('Should generate sortByDate object', () => {
   const action = sortByDate();
   expect(action).toEqual({
      type: 'SORT_BY_DATE'
   })
});