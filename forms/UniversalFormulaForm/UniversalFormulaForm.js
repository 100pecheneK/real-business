import React, { useState } from 'react'
import SecondPage from '../../containers/SecondPage'
import LayoutPage from '../../containers/LayoutPage'
import styles from '../../styles/Home.module.css'
import NumberForm from '../../components/NumberForm'
import AnimatedLink from '../../containers/AnimatedLink'
import formulaCollection from '../../buisness'
import formulaStyles from './UniversalFormulaForm.module.css'
import isEmpty from '../../utils/isObjectEmpty'
import Image from 'next/image'
import RenderText from '../../components/RenderText'
import OpacityDiv from '../../containers/OpacityDiv'

const initialStateTemplate = field => {
  return { [field.meta._formulaName]: 0 }
}

function calculate(formulaName, data) {
  const Formula = formulaCollection.formuls[formulaName]
  const formula = new Formula()
  try {
    return formula.validate(data).calculate(data).getResult()
  } catch (e) {
    return e.message
  }
}

export default function UniversalFormulaForm({
  image,
  text,
  header,
  description,
  fields,
  options,
}) {
  const formulasNames = fields.map(initialStateTemplate)
  const [result, setResult] = useState(formulasNames)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isCleared, setIsCleared] = useState(false)

  const onSubmit = inputsValues => {
    const formulaName = Object.keys(inputsValues)[0]
    if (!isEmpty(inputsValues[formulaName])) {
      setResult(prev => {
        const res = calculate(formulaName, inputsValues[formulaName])

        let isFound = false
        const newPrev = prev.map(p => {
          const k = Object.keys(p)[0]
          if (k === formulaName) {
            p[formulaName] = res
            isFound = true
          }
          return p
        })
        if (!isFound) {
          newPrev.push({ [formulaName]: res })
        }
        return newPrev
      })
    } else {
      setResult(prevRes =>
        prevRes.map(res => {
          if (Object.keys(res)[0] !== formulaName) {
            return res
          }
          res[formulaName] = 0
          return res
        })
      )
    }
  }
  const onBaseSubmit = () => {
    setIsSubmitted(true)
  }
  const onBaseClear = () => {
    setIsCleared(true)
  }
  return (
    <FormulaPage
      text={text}
      image={image}
      pageKey={options.pageKey}
      title={options.title}
      header={header}
      description={description}
    >
      <div className={formulaStyles.form}>
        {fields.map(field => (
          <NumberForm
            formulaTitle={field.meta.name}
            key={field.meta._formulaName}
            setIsSubmitted={setIsSubmitted}
            isCleared={isCleared}
            setIsCleared={setIsCleared}
            isSubmitted={isSubmitted}
            fields={field.fields}
            formulaName={field.meta._formulaName}
            onSubmit={onSubmit}
          />
        ))}
      </div>
      <div className={formulaStyles.formSubmit}>
        <button
          onClick={onBaseClear}
          className={styles.btn + ' ' + formulaStyles.formSubmitBtn}
        >
          Очистить
        </button>
        <button
          onClick={onBaseSubmit}
          className={
            styles.btn + ' ' + styles.active + ' ' + formulaStyles.formSubmitBtn
          }
        >
          Рассчитать
        </button>
      </div>
      <div className={formulaStyles.result}>
        <h2>
          {result.map(res => {
            const description = fields.find(
              field => field.meta._formulaName === Object.keys(res)[0]
            ).meta.name
            const name = Object.keys(res)[0]
            return (
              <p key={name}>
                {description}:{' '}
                {typeof res[name] === 'string'
                  ? res[name]
                  : `${(res[name] * 100).toFixed(0)}%`}
              </p>
            )
          })}
        </h2>
      </div>
    </FormulaPage>
  )
}

function MoreInfo({ image, title, text }) {
  const [isMore, setIsMore] = useState(false)
  if (!image && !text) {
    console.log(image, text)
    return null
  }
  return (
    <>
      <p
        style={{ cursor: 'pointer', textDecoration: 'underline' }}
        onClick={() => setIsMore(p => !p)}
      >
        Подробнее
      </p>
      {isMore && (
        <OpacityDiv>
          {image && (
            <div style={{ textAlign: 'center' }}>
              <Image
                src={`/images/${image.src}`}
                width={image.width}
                height={image.height}
                alt={title}
              />
            </div>
          )}
          {text && <RenderText text={text} />}
        </OpacityDiv>
      )}
    </>
  )
}
function FormulaPage({
  children,
  pageKey,
  title,
  header,
  description,
  image,
  text,
}) {
  return (
    <SecondPage pageKey={pageKey}>
      <LayoutPage title={title}>
        <Main>
          <Title title={header} />
          <Description description={description} />
          <MoreInfo image={image} text={text} title={title} />
          {children}
          <LinkToHome />
        </Main>
      </LayoutPage>
    </SecondPage>
  )
}
function LinkToHome() {
  return (
    <AnimatedLink href={'/'}>
      <h3 style={{ margin: 0 }}>Назад &larr;</h3>
    </AnimatedLink>
  )
}
function Description({ description }) {
  return <p className={styles.description}>{description}</p>
}
function Title({ title }) {
  return <h1 className={styles.title}>{title}</h1>
}
function Main({ children }) {
  return <main className={styles.main}>{children}</main>
}
