import React from 'react';
import './f1.css';
import ExpenseForm from './ExpenseForm';
//Css add 


const NewExpense = (props) => {
  
  const saveExpenseDateHandler = (enteredExpenseDate) => {
    const expenseData = {
        ...enteredExpenseDate,
        id : Math.random().toString()
    }
    console.log(expenseData);
    props.onAddExpense(expenseData);
  }
  
  
    return (
    <div className='new-expense'> 
        <ExpenseForm onSaveExpenseData = {saveExpenseDateHandler} />
    </div>
  )
}

export default NewExpense
