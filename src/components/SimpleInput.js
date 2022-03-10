import useInputValidate from "../hooks/input-validate-hook";

const SimpleInput = () => {
  const {
    value: enteredName,
    isTouched: isNameInputTouched,
    enterInputStateDispatch: enterNameInputDispatch,
    isEnteredValueValid: isEnteredNameValid,
  } = useInputValidate((value) => value.trim().length !== 0);

  const {
    value: enteredEmail,
    isTouched: isEmailInputTouched,
    enterInputStateDispatch: enterEmailInputDispatch,
    isEnteredValueValid: isEnteredEmailValid,
  } = useInputValidate((value) =>
    String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );

  let isFormValid = false;

  if (isEnteredNameValid && isEnteredEmailValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => {
            enterNameInputDispatch({
              type: "onChange",
              value: e.target.value,
            });
          }}
          value={enteredName}
          name="name"
          onBlur={() =>enterNameInputDispatch({
            type: "onBlur",
          })}
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
          value={enteredEmail}
          onChange={(e) =>
            enterEmailInputDispatch({
              type: "onChange",
              value: e.target.value,
            })
          }
          onBlur={() =>enterEmailInputDispatch({
            type: "onBlur",
          })}
        />
        {!isEnteredEmailValid && isEmailInputTouched && (
          <p className="error-text">Pleas enter valid email...</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
