import React,{useState} from 'react'
import './f1.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  
  const [title,setTitle] = useState(props.title);


  const clickHandler = () => {
    alert("Changing Title ");
    setTitle("Updated!");
  }
  // usestate brief. 

  return ( <div className = "expense-item">
      <ExpenseDate date = {props.date} />
      <div className = "expense-item__description"> 
        <h2> {title} </h2>
        <div className="expense-item__price"> {props.price} </div>
      </div>
      <button onClick = {()=> clickHandler()} >Change Title</button>
    </div> );
  
}

export default ExpenseItem

// woring with react . 