import React from 'react'
import UniversalFormulaForm from '../forms/UniversalFormulaForm/UniversalFormulaForm'
import formulaCollection from '../buisness'

const F = formulaCollection.getFormulaByName('sum')
const fields = [new F().getMetaAndFields()]

export default function Formula1() {
  return (
    <UniversalFormulaForm
      header={F.name}
      description={F.description}
      fields={fields}
      options={{ pageKey: 'Formula1', title: F.name }}
    />
  )
}
