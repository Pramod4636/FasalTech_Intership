import React ,{useState} from 'react'
import './f2.css';

const ExpenseForm = () => {
   

   const [userInput,setUserInput] = useState({
    enteredTitle :'',
    enteredAmount : '',
    enteredDate : ''
   });    

   const titleChangeHandler = (event) =>{
        
    
        //setUserInput({...userInput,"enteredTitle" : event.target.value});
        setUserInput( (prevState) =>{
            return {...prevState,"enteredTitle" : event.target.value}

        })
        console.log(userInput);

   }

   const amountChangeHandler = (event)=>{
    setUserInput({...userInput,"enteredAmount" : event.target.value});
        
   }

   const dateChangeHandler = (event) =>{
  
    setUserInput({...userInput,"enteredDate" : event.target.value});
   }

  const submitHandler = (event)=>{
    event.preventDefault();
    const expenseDate = {
        title : userInput.enteredTitle,
        amount : userInput.enteredAmount,
        date   : userInput.enteredDate
    }
    console.log(expenseDate);
    setUserInput({enteredTitle :'',
    enteredAmount : '',
    enteredDate : ''});
}
  return (
   <form onSubmit = {submitHandler}>
    <div className='new-expense__controls'>
    <div className = "new-expense__control">
      <label >Title</label>
        <input type="text" value = {userInput.enteredTitle} onChange = {titleChangeHandler}/>
    </div>
    <div className = "new-expense__control">
       <label >Amount</label>
        <input type="number" value = {userInput.enteredAmount} min="0.01" step ='0.01' onChange = {amountChangeHandler}/>
    </div>
    <div className = "new-expense__control">
      <label >Date</label>
        <input type="date"  onchange = {dateChangeHandler}/>
    </div>
    <div className='new-expense__actions'>
        <button type ="submit">Add Expense</button>
    </div>
    </div>
   </form>
  )
}

export default ExpenseForm
