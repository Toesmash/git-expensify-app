import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
   return (
      <div>
         {
            props.expensesCount === 1 
            ? 
            <p>Viewing {props.expensesCount} expense totaling {numeral(props.expenses/100).format('0,0[.]00$')}</p> 
            : 
            <p>Viewing {props.expensesCount} expenses totaling {numeral(props.expenses/100).format('0,0[.]00$')}</p>
         }
      </div>
   );
};

const mapStateToProps = (reduxState) => {
   return {
      expenses: expensesTotal(selectExpenses(reduxState.expenses, reduxState.filters)),
      expensesCount: (selectExpenses(reduxState.expenses, reduxState.filters)).length
   }
};

export default connect(mapStateToProps)(ExpensesSummary);