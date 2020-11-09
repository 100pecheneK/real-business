import React from 'react'
import UniversalFormulaForm from '../forms/UniversalFormulaForm/UniversalFormulaForm'
import formulaCollection from '../buisness'

const F = formulaCollection.getFormulaByName('business')
const fields = [new F().getMetaAndFields()]

export default function Formula0() {
  return (
    <UniversalFormulaForm
      header={F.name}
      description={F.description}
      fields={fields}
      options={{ pageKey: 'Formula0', title: F.name }}
    />
  )
}
