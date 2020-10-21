import useEnterPress from '../hooks/useEnterPress'
import styles from '../styles/Home.module.css'
import Input from '../components/Input'
import withBaseFormFunc from '../containers/withBaseFormFunc'


function getRes(num_1, num_2) {
  return num_1 + num_2
}

function Form({setResult, form, result, onInputChange, onInputClear}) {
  const onSubmit = () => {
    setResult(getRes(+form.number_1, +form.number_2))
  }
  const onEnterPress = useEnterPress(onSubmit)
  return (
    <>
      <div className={styles.form}>
        <Input onKeyPress={onEnterPress} name={'number_1'} label={'Число 1'}
               placeholder={'Введите число 1'} onChange={onInputChange}
               value={form.number_1}/>
        <Input onKeyPress={onEnterPress} name={'number_2'} label={'Число 2'}
               placeholder={'Введите число 2'} onChange={onInputChange}
               value={form.number_2}/>
        <div className={styles['form-submit']}>
          <button className={styles.btn} onClick={onInputClear}>Отчистить</button>
          <button className={styles.btn + ' ' + styles.active} onClick={onSubmit}>Рассчитать
          </button>
        </div>
        <div className={styles.result}>
          <h2>{result}</h2>
        </div>
      </div>
    </>
  )
}

const OneForm = withBaseFormFunc(Form, {
  result: 0,
  initialFormValues: {
    number_1: '',
    number_2: '',
  }
})
export default OneForm