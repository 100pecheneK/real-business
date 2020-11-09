import STATUS from './formulaStatus'

export default class FormulaCollection {
  constructor(formuls) {
    this.formuls = formuls
  }

  getFormulaByName(name) {
    const Formula = this.formuls[name]
    if (!Formula) {
      throw new Error('Formula with name "' + name + '" not found')
    }
    return Formula
  }

  getMainFormulas() {
    const mainFormulas = {}
    for (const name in this.formuls) {
      if (this.formuls.hasOwnProperty(name)) {
        const _F = this.getFormulaByName(name)
        if (_F._status === STATUS.MAIN) {
          mainFormulas[name] = _F
        }
      }
    }
    return mainFormulas
  }
  getSecondaryFormulas() {
    const secondaryFormulas = {}
    for (const name in this.formuls) {
      if (this.formuls.hasOwnProperty(name)) {
        const _F = this.getFormulaByName(name)
        if (_F._status === STATUS.SECONDARY) {
          secondaryFormulas[name] = _F
        }
      }
    }
    return secondaryFormulas
  }
  getMainFormulasMetaData() {
    const formulas = this.getMainFormulas()
    return this.getFormulsMetaData(formulas)
  }
  getSecondaryFormulasMetaData() {
    const formulas = this.getSecondaryFormulas()
    return this.getFormulsMetaData(formulas)
  }

  getFormulsMetaData(formuls) {
    const metaData = []
    for (const name in formuls) {
      if (formuls.hasOwnProperty(name)) {
        const _Formula = this.getFormulaByName(name)
        metaData.push(this.getFormulaMetaData(_Formula))
      }
    }
    return metaData
  }

  getFormulaMetaData(_Formula) {
    return {
      href: _Formula.href,
      name: _Formula.name,
      description: _Formula.description,
    }
  }
}
