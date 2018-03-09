import React from 'react';
import { Link } from 'react-router-dom';
// export a stateless functional component
// description amount createdAt


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <p><Link to={`/edit/${id}`}>{description}</Link>, {amount}, {createdAt}</p>
    </div>
);

 export default ExpenseListItem;