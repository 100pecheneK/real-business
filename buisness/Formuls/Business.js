import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class Business extends AbstractFormula {
  static _status = STATUS.MAIN
  static _formulaName = 'business'
  static href = 'business'
  static name = 'Бизнес'
  static description = 'Получи свой бизнес для получения бизнеса'

  calculate({ a, b }) {
    this.result = a - b
    return this
  }

  getFields() {
    return [
      {
        name: 'a',
        label: 'Прибыль',
        placeholder: 'Введите прибыль',
      },
      {
        name: 'b',
        label: 'Расходы',
        placeholder: 'Введите расходы',
      },
    ]
  }

  validate({ a, b }) {
    if (a && b) {
      return this
    }
    throw new Error('Не все поля заполнены!')
  }
}
