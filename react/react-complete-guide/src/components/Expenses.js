import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "../css/Expenses.css"

function Expenses(props) {



    return (
        <Card className="expenses">
            {/* 왜 안되는 코드인지 찾아봐야함 */}
            {/* {props.items.map((el) => {
                return (
                        <ExpenseItem
                            title={el.title}
                            amount={el.amount}
                            date={el.amount} />
                )
            })} */}



            {props.items.map((el, idx) => {
                return (
                    <ExpenseItem
                        key={idx}
                        title={el.title}
                        amount={el.amount}
                        date={el.date}>
                    </ExpenseItem>
                )
            })}


            {/* <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date} />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date} />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date} /> */}
            {/* <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            /> */}
            {/* 참조 오류 블로깅하기 */}
        </Card>
    )

}

export default Expenses;