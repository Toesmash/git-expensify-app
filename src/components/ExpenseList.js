import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';



export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ): (
                props.expenses.map((item) => (
                    <ExpenseListItem key={item.id} {...item}
                    />
                ))
            )
        }


    </div>
);

const mapStateToProps = (reduxState) => {
    return {
        expenses: selectExpenses(reduxState.expenses, reduxState.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
