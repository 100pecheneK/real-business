import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class F8 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F8'
  static href = 'f8'
  static name = 'Основные средства'
  static description =
    'Рассчитайте рентабельность основных средств для повышения рентабельности'

  calculate({ F8_field_1, F8_field_2 }) {
    this.result = F8_field_1 / F8_field_2
    return this
  }

  getFields() {
    return [
      {
        name: 'F8_field_1',
        label: 'Чистая прибыль',
        placeholder: 'Введите чистую прибыль',
      },
      {
        name: 'F8_field_2',
        label: 'Стоимость средств',
        placeholder: 'Введите стоимость средств',
      },
    ]
  }
}
