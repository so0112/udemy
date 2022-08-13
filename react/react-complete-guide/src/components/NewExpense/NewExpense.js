import React from "react";

import ExpenseForm from "./ExpenseForm";
import '../../css/NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        props.onAddExpense(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
};

export default NewExpense;