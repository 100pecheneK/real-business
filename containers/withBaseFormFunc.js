import {useState} from 'react'


export default function withBaseFormFunc(Form, data) {
  return function (props) {
    const [result, setResult] = useState(data.result)
    const [form, setForm] = useState(data.initialFormValues)
    const onInputChange = (e) => {
      setForm({...form, [e.target.name]: e.target.value})
    }
    const onInputClear = () => {
      setForm(data.initialFormValues)
      setResult(0)
    }

    return <Form {...props} setResult={setResult}
                 form={form}
                 result={result}
                 onInputChange={onInputChange}
                 onInputClear={onInputClear}/>
  }
}