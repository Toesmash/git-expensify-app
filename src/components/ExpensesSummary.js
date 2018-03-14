import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesTotal, expensesCount }) => {
   return (
      <div className='page-header'>
         <div className='content-container'>
            {
               expensesCount === 1
                  ?
                  <h1 className='page-header__title'>Viewing <span>{expensesCount}</span> expense totaling <span>{numeral(expensesTotal / 100).format('0,0[.]00$')}</span></h1>
                  :
                  <h1 className='page-header__title'>Viewing <span>{expensesCount}</span> expenses totaling <span>{numeral(expensesTotal / 100).format('0,0[.]00$')}</span></h1>
            }
            <div className='page-header__actions'>
               <Link className='button' to="/create">Add Expense</Link>
            </div>
         </div>
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