import styles from '../styles/Home.module.css'
import {useEffect, useState} from 'react'


export function Input({type = 'text', name, placeholder, label, onChange, value = ''}) {
  const [_value, _setValue] = useState('')

  useEffect(() => {
    if (!value) {
      _setValue('')
    }
  }, [value])

  const _onChange = (e) => {
    _setValue(e.target.value)
    onChange(e)
  }

  return (
    <div className={styles['input-container']}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input type={type} name={name} value={_value} onChange={_onChange}
             placeholder={placeholder}
             className={styles.input}/>
    </div>
  )
}
export function NumberInput({ onChange, ...props }) {
  const _onChange = (e) => {
    onChange({ name: e.target.name, value: +e.target.value });
  };
  return <Input {...props} onChange={_onChange} type="number" />;
}