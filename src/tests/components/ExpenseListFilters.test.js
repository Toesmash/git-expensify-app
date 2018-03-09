import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, populatedFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper;

beforeEach(() => {
   setTextFilterSpy = jest.fn();
   sortByDateSpy = jest.fn();
   sortByAmountSpy = jest.fn();
   setStartDateSpy = jest.fn();
   setEndDateSpy = jest.fn();
   wrapper = shallow(
      <ExpenseListFilters
         filters={filters}
         setTextFilter={setTextFilterSpy}
         sortByDate={sortByDateSpy}
         sortByAmount={sortByAmountSpy}
         setStartDate={setStartDateSpy}
         setEndDate={setEndDateSpy}
      />
   )
})

test('Should render ExpenseListFilters', () => {
   expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with populatedFilters', () => {
   wrapper.setProps({
      filters: populatedFilters
   })
   expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
   const newText = 'Coffee'
   wrapper.find('input').simulate('change', {
      target: {
         value: newText
      }
   });
   expect(setTextFilterSpy).toHaveBeenLastCalledWith(newText);
});


test('Should sort by date', () => {
   wrapper.setProps({
      filters: populatedFilters
   })

   wrapper.find('select').simulate('change', {
      target: {
         value: 'date'
      }
   });
   expect(sortByDateSpy).toHaveBeenLastCalledWith();
});


test('Should sort by amount', () => {
   wrapper.find('select').simulate('change', {
      target: {
         value: 'amount'
      }
   });
   expect(sortByAmountSpy).toHaveBeenLastCalledWith();
});


test('Should handle date changes', () => {
   const startDate = populatedFilters.startDate;
   const endDate = populatedFilters.endDate;

   wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
   expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
   expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
});


test('Should handle date focus changes state', () => {
   const focused = 'endDate';
   wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
   expect(wrapper.state('calendarFocused')).toBe(focused);
});





