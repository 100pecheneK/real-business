import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class F9 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F9'
  static href = 'f9'
  static name = 'Персонал'
  static description =
    'Рассчитайте рентабельность персонала для повышения рентабельности'

  calculate({ F9_field_1, F9_field_2 }) {
    this.result = F9_field_1 / F9_field_2
    return this
  }

  getFields() {
    return [
      {
        name: 'F9_field_1',
        label: 'Чистая прибыль',
        placeholder: 'Введите чистую прибыль',
      },
      {
        name: 'F9_field_2',
        label: 'Количество работников на предприятии',
        placeholder: 'Введите количество работников на предприятии',
      },
    ]
  }
}
