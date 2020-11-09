import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class Formula1 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'sum'
  static href = 'formula1'
  static name = 'Сумма'
  static description = 'Получите сумму между двумя числами'

  calculate({ a, b }) {
    this.result = a + b
    return this
  }

  getFields() {
    return [
      {
        name: 'a',
        label: 'Число сложения 1',
        placeholder: 'Введите Число 1',
      },
      {
        name: 'b',
        label: 'Число сложения 2',
        placeholder: 'Введите Число 2',
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
