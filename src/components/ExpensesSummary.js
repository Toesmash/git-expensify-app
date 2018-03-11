import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expensesTotal, expensesCount}) => {
   return (
      <div>
         {
            expensesCount === 1 
            ? 
            <p>Viewing {expensesCount} expense totaling {numeral(expensesTotal/100).format('0,0[.]00$')}</p> 
            : 
            <p>Viewing {expensesCount} expenses totaling {numeral(expensesTotal/100).format('0,0[.]00$')}</p>
         }
      </div>
   );
};

const mapStateToProps = (reduxState) => {
   return {
      expensesTotal: expensesTotal(selectExpenses(reduxState.expenses, reduxState.filters)),
      expensesCount: (selectExpenses(reduxState.expenses, reduxState.filters)).length
   }
};

export default connect(mapStateToProps)(ExpensesSummary);