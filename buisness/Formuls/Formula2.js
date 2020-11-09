import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class Formula2 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'diff'
  static href = 'formula2'
  static name = 'Разница'
  static description = 'Получите разницу между двумя числами'

  calculate({ a, b }) {
    this.result = a - b
    return this
  }

  getFields() {
    return [
      {
        name: 'a',
        label: 'Число из которого вычитают',
        placeholder: 'Введите Число 1',
      },
      {
        name: 'b',
        label: 'Вычитаемое',
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
