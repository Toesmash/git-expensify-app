import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

numeral.register('locale', 'svk', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    currency: {
        symbol: '€'
    }
});

// switch between locales
numeral.locale('svk');



const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <Link className='list-item' to={`/edit/${id}`}>
        <div>
            <h3 className='list-item__title'>{description}</h3>
            <span className='list-item__sub-title'>{moment(createdAt).format('DD.MM.YYYY')}</span>
        </div>
        <h3 className='list-item__data'>
            {numeral(amount / 100).format('0,0[.]00$')}
        </h3>
    </Link>
);

export default ExpenseListItem;