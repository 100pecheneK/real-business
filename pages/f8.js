import React from 'react'
import UniversalFormulaForm from '../forms/UniversalFormulaForm/UniversalFormulaForm'
import formulaCollection from '../buisness'

const F = formulaCollection.getFormulaByName('F8')
const fields = [new F().getMetaAndFields()]

export default function Formula8() {
  return (
    <UniversalFormulaForm
      image={F.image}
      text={F.text}
      header={F.name}
      description={F.description}
      fields={fields}
      options={{ pageKey: 'f8', title: F.name }}
    />
  )
}
