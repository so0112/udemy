import ExpenseDate from './ExpenseDate';
import Card from './Card';
import '../css/ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    let changeTitle = () => {
        setTitle('값 변경')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">$ {props.amount}</div>
                <button onClick={changeTitle}> title 변경 </button>
            </div>
        </Card>
    );
}

export default ExpenseItem;