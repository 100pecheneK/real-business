export default class AbstractFormula {
  static _status = 'status not implemented'
  static _formulaName = '_formulaName not implemented'
  static href = 'href not implemented'
  static name = 'name not implemented'
  static description = ''

  constructor() {
    this.result = 0
  }

  calculate() {
    throw new Error('Method not implemented')
  }

  getFields() {
    throw new Error('Method not implemented')
  }

  getMetaData() {
    return {
      _status: this.constructor._status,
      _formulaName: this.constructor._formulaName,
      href: this.constructor.href,
      name: this.constructor.name,
      description: this.constructor.description,
    }
  }

  getMetaAndFields() {
    return {
      meta: this.getMetaData(),
      fields: this.getFields(),
    }
  }
  getResult() {
    return this.result
  }
  validate(fields) {
    let fieldsCount = 0
    for (const _ in fields) {
      fieldsCount++
    }
    if (fieldsCount === this.getFields().length) {
      return this
    }
    throw new Error('Не все поля заполнены!')
  }
}
