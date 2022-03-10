import useInputValidate from "../hooks/input-validate-hook";

const SimpleInput = () => {
  const {
    value: enteredName,
    isEnteredValueValid: isEnteredNameValid,
    inputChangeHandler : nameInputChangeHandler,
    handleOnBlurInput : handleOnBlurName,
    setIsTouched : setIsNameInputTouched,
    isTouched : isNameInputTouched
  } = useInputValidate((value) => value.trim().length !== 0);

  //   const checkValid = (enteredValue) => {
  //     if(enteredValue.name.trim().length !== 0 && String(enteredInput.email)
  //     .toLowerCase()
  //     .match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     )){
  //       return true
  //     }
  //     return false
  //   }

  let isFormValid = false;

  if (isEnteredNameValid) {
    isFormValid = true;
  }


  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsNameInputTouched(true)
  };

  console.log()

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          name="name"
          onBlur={handleOnBlurName}
        />
        {!isEnteredNameValid && isNameInputTouched && (
          <p className="error-text">Name must not be emtpy...</p>
        )}
      </div>
      {/* <div className="form-control">
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
      </div> */}
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
