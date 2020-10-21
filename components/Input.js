import styles from '../styles/Home.module.css'


export default function Input({type='number', name, placeholder, label, onChange,onKeyPress, value=''}) {
  return (
    <div className={styles['input-container']}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input onKeyPress={onKeyPress} name={name} value={value} onChange={onChange} placeholder={placeholder}
             className={styles.input} type={type}/>
    </div>
  )
}