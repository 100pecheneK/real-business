import {useCallback, useEffect, useState} from 'react'
import {NumberInput} from './Input'


export default function NumberForm({
                                     formulaName,
                                     fields,
                                     onSubmit,
                                     isSubmitted,
                                     setIsSubmitted,
                                     setIsCleared,
                                     isCleared
                                   }) {
  const [inputsValues, setInputsValues] = useState({[formulaName]: {}})

  const _onClear = useCallback(() => {
    setInputsValues({[formulaName]: {}})
    onSubmit({[formulaName]: {}})
  }, [setInputsValues, onSubmit, formulaName])

  useEffect(() => {
    if (isSubmitted) {
      onSubmit(inputsValues)
      setIsSubmitted(false)
    }
  }, [isSubmitted, setIsSubmitted, onSubmit, inputsValues])

  useEffect(() => {
    if (isCleared) {
      _onClear()
      setIsCleared(false)
    }
  }, [isCleared, setIsCleared, _onClear, inputsValues])

  const _onSubmit = () => {
    onSubmit(inputsValues)
  }

  const _onNumberInputChange = ({name, value}) => {
    setInputsValues((prevInputsValues) => ({
      [formulaName]: {
        ...prevInputsValues[formulaName],
        [name]: value
      }
    }))
  }

  return (
    <>
      {fields.map((field, key) => (
        <NumberInput
          key={field.name + key}
          value={inputsValues[formulaName][field.name]}
          name={field.name}
          onChange={_onNumberInputChange}
          placeholder={field.placeholder}
          label={field.label}
        />
      ))}
    </>
  )
}