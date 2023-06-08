
import './App.css';
import React,{useState} from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
const Intial_expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

function App() {
  
   const [expenses,setExpenses] = useState(Intial_expenses);
   const addExpenseHandler = (expense) =>{
      console.log("In app.js ");
      console.log(expense);
      setExpenses( [expense,...expenses] );
   }
  return (
    <>
    <h2>Let's get started !</h2>
    <p>This is also visible </p>
    
    <NewExpense onAddExpense = {addExpenseHandler}/>
    {
      expenses.map((expense ,index ) => (
          <ExpenseItem key = {index} date = {expense.date} title = {expense.title} price = {expense.amount} />
      ))
    }
    </>
  );
}

export default App;
