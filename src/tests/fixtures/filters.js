import moment from 'moment';
import { unregisterDecorator } from 'handlebars';

const filters = {
   text: '',
   sortBy: 'date',
   startDate: undefined,
   endDate: undefined
};

const populatedFilters = {
   text: 'Bill',
   sortBy: 'amount',
   startDate: moment(0),
   endDate: moment(0).add(3, 'days')
};

export { filters, populatedFilters };