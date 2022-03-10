import { useReducer } from "react";

const inputReducer = (state, action) => {
  if (action.type === "onChange") {
    return {
      isTouched: state.isTouched,
      value: action.value,
    };
  }

  if (action.type === "onBlur") {
    return {
      isTouched: true,
      value: state.value,
    };
  }

  return state;
};

const useInputValidate = (checkValid) => {
  const [enterInputState, enterInputStateDispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
  });

  const isEnteredValueValid = checkValid(enterInputState.value);

  return {
    value: enterInputState.value,
    isTouched: enterInputState.isTouched,
    enterInputStateDispatch,
    isEnteredValueValid,
  };
};

export default useInputValidate;
