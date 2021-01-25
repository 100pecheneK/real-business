import React from 'react'
import UniversalFormulaForm from '../forms/UniversalFormulaForm/UniversalFormulaForm'
import formulaCollection from '../buisness'

const F = formulaCollection.getFormulaByName('F2')
const fields = [new F().getMetaAndFields()]

export default function Formula2() {
  return (
    <UniversalFormulaForm
      image={F.image}
      text={F.text}
      header={F.name}
      description={F.description}
      fields={fields}
      options={{ pageKey: 'f2', title: F.name }}
    />
  )
}
