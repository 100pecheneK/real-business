import React from 'react'
import UniversalFormulaForm from '../forms/UniversalFormulaForm/UniversalFormulaForm'
import formulaCollection from '../buisness'

const F = formulaCollection.getFormulaByName('F3')
const fields = [new F().getMetaAndFields()]

export default function Formula3() {
  return (
    <UniversalFormulaForm
      header={F.name}
      description={F.description}
      fields={fields}
      options={{ pageKey: 'f3', title: F.name }}
    />
  )
}
