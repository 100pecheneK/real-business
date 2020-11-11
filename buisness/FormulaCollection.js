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

  getFormulasByStatus(status) {
    if (!STATUS[status]) {
      throw new Error('Formula with status "' + status + '" not found')
    }
    const formulas = []

    for (const name in this.formuls) {
      if (this.formuls.hasOwnProperty(name)) {
        const _F = this.getFormulaByName(name)
        if (_F._status === STATUS[status]) {
          formulas.push(_F)
        }
      }
    }
    return formulas
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
