import { useState } from "react";

const useInputValidate = (checkValid) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isEnteredValueValid = checkValid(enteredValue);
  const isError = !isEnteredValueValid && isTouched;

  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const handleOnBlurInput = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    hasError: isError,
    setEnteredValue,
    isTouched,
    setIsTouched,
    isEnteredValueValid,
    inputChangeHandler,
    handleOnBlurInput
  };
};

export default useInputValidate;
