import React from 'react'
import UniversalFormulaForm from '../forms/UniversalFormulaForm/UniversalFormulaForm'
import formulaCollection from '../buisness'

const F = formulaCollection.getFormulaByName('F6')
const fields = [new F().getMetaAndFields()]

export default function Formula6() {
  return (
    <UniversalFormulaForm
      header={F.name}
      description={F.description}
      fields={fields}
      options={{ pageKey: 'f6', title: F.name }}
    />
  )
}
