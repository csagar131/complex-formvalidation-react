import React, {useState} from "react"

const useInputValidate = (checkValid) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState('')

    const isEnteredValueValid = checkValid()
    const isError = !isEnteredValueValid && isTouched
}

export default useInputValidate;