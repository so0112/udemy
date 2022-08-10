import React, { useState } from "react";

import '../../css/ExpenseForm.css'



const ExpenseForm = (props) => {

    // 1. state 1번 방법
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // 2. state 2번 방법
    // 객체로 사용하는 방법이 있는데 코드는 간결해도 이해하기 어려울 수 잇음

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amuntChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); // 요청이 보내지는 것을 막음 (안 할 경우 페이지 로드가 진행)

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        // console.log(expenseData)

        // 상위 컴포넌트에서 props로 전달된 함수
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');


    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amuntChangeHandler} />
                </div>


                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type='submit'>Expense 추가</button>
            </div>

        </form>
    );
};

export default ExpenseForm;