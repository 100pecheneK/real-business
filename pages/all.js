import React from 'react'
import UniversalFormulaForm from '../forms/UniversalFormulaForm/UniversalFormulaForm'
import formulaCollection from '../buisness'

const fields = []

for (const formulaName in formulaCollection.formuls) {
  if (formulaCollection.formuls.hasOwnProperty(formulaName)) {
    fields.push(new formulaCollection.formuls[formulaName]().getMetaAndFields())
  }
}

export default function All() {
  return (
    <UniversalFormulaForm
      header={'Сумма и разница'}
      description={'Введите 4 числа'}
      fields={fields}
      options={{ pageKey: 'All', title: 'Все' }}
    />
  )
}
