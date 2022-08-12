import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: '휴지',
    amount: 2000,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: '노트북',
    amount: '200만',
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: '연필',
    amount: 1200,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: '컵',
    amount: 4500,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses([expense, ...expenses])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
