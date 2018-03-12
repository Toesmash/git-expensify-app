import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpense extends React.Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
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
    editExpense: (id, update) => dispatch(editExpense(id, update)),
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