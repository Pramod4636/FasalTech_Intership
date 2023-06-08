import React from 'react'
import './f1.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  
  const clickHandler = () => {
    alert("Changing Title ");
  }

  return ( <div className = "expense-item">
      <ExpenseDate date = {props.date} />
      <div className = "expense-item__description"> 
        <h2> {props.title} </h2>
        <div className="expense-item__price"> {props.price} </div>
      </div>
      <button onClick = {()=> clickHandler()} >Change Title</button>
    </div> );
  
}

export default ExpenseItem

// woring with react . 