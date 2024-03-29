import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

// Daynmicaly update CSS using inline css  
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setisValid] = useState(true);
  const goalInputChangeHandler = event => {

    if(event.target.value.trim().length > 0 ) 
    {
        setisValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim().length === 0 )
    {
      setisValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style = { { color : !isValid  ? 'red' : 'black' }}>Course Goal</label>
        <input  style = {{borderColor : !isValid ? 'salmon' : '#ccc'   , background : !isValid  ? 'salmon' : 'transparent'}}    type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
