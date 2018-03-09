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
    <div>
        <Link to={`/edit/${id}`}>{description} </Link>
        <p>
            {numeral(amount/100).format('0,0[.]00$')}, {moment(createdAt).format('DD.MM.YYYY')}
        </p>
    </div>
);

export default ExpenseListItem;