import { useState } from "react";

const SimpleInput = () => {
  const [isNameInputTouched, setIsNameInputTouched] = useState(false);
  const [isEmailInputTouched, setIsEmailInputTouched] = useState(false)

  const [enteredInput, setEnteredInput] = useState({
    name : '',
    email : ''
  })
  

  const isEnteredNameValid = enteredInput.name.trim().length !== 0;
  const isEnteredEmailValid = String(enteredInput.email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )

  let isFormValid = false;


  if (isEnteredNameValid && isEnteredEmailValid  ) {
    isFormValid = true;
  }

  const inputChangeHandler = (e) => {
    setEnteredInput(
      {
        ...enteredInput,
        [e.target.name] : e.target.value
      }
    )
  };

  const handleOnFocusOutName = () => {
    setIsNameInputTouched(true);
    
  };

  const handleOnFocusOutEmail = () => {
    setIsEmailInputTouched(true)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsNameInputTouched(true);
    setIsNameInputTouched(true)
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputChangeHandler}
          value={enteredInput.name}
          name='name'
          onBlur={handleOnFocusOutName}
        />
        {!isEnteredNameValid && isNameInputTouched && (
          <p className="error-text">Name must not be emtpy...</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={enteredInput.email}
          onChange={inputChangeHandler}
          onBlur={handleOnFocusOutEmail}
        />
        {!isEnteredEmailValid && isEmailInputTouched &&
          <p className="error-text">Pleas enter valid email...</p>
        }
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
