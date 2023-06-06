import React from 'react'
import './f1.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
   const month = props.date.toLocaleString('en-US' , {month : 'long'}); //toLocalString('en-US',{month :'long'});
   const day = props.date.toLocaleString('en-US',{ day : '2-digit'});
   const year = props.date.getFullYear();


  return ( <div className = "expense-item">
     
      <ExpenseDate date = {props.date} />
      <div className = "expense-item__description"> 
        <h2> {props.title} </h2>
        <div className="expense-item__price"> {props.price} </div>
      </div>
    </div> );
  
}

export default ExpenseItem
