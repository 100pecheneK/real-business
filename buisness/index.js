import FormulaCollection from './FormulaCollection'
import formulas from './Formuls'

function collectFormula(formulas) {
  // type: {'FormulaName_formulaName': Formula}
  const formulasObject = {}
  formulas.forEach(F => (formulasObject[F._formulaName] = F))
  return formulasObject
}

const formulaCollection = new FormulaCollection(collectFormula(formulas))

export default formulaCollection
