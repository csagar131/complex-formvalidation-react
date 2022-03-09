import { useState } from "react";

const SimpleInput = (props) => {
  

  const [enteredName, setEnteredName] = useState("");
  const [hasStartedEnteringName, setHasStartedEnteringName] = useState(false)

  const isEnteredNameValid = enteredName.trim().length !== 0


  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const handleOnFocusOut = (e) => {
      setHasStartedEnteringName(true)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setHasStartedEnteringName(true)
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={handleOnFocusOut}
        />
        {!isEnteredNameValid && hasStartedEnteringName && <p className="error-text">Name must not be emtpy...</p>}
      </div>
      <div className="form-actions">
        <button >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
