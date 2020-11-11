import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class F7 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F7'
  static href = 'f7'
  static name = 'Капитал'
  static description =
    'Рассчитайте рентабельность капитала для повышения рентабельности'

  calculate({ F7_field_1, F7_field_2 }) {
    this.result = F7_field_1 / F7_field_2
    return this
  }

  getFields() {
    return [
      {
        name: 'F7_field_1',
        label: 'Чистая прибыль за год',
        placeholder: 'Введите чистую прибыль за год',
      },
      {
        name: 'F7_field_2',
        label: 'Собственный капитал',
        placeholder: 'Введите собственный капитал',
      },
    ]
  }
}
