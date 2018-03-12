import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpense extends React.Component {

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemove = () => {
        // console.log(this.props.expense.id)
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />

                <button
                    onClick={this.onRemove}
                >
                    Remove
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, update) => dispatch(startEditExpense(id, update)),
    startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense))
});

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((item) => {
            return item.id === props.match.params.id;
        })
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);