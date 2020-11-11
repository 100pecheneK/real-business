import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class F5 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F5'
  static href = 'f5'
  static name = 'Активы'
  static description =
    'Рассчитайте рентабельность активов для повышения рентабельности'

  calculate({ F5_field_1, F5_field_2 }) {
    this.result = F5_field_1 / F5_field_2
    return this
  }

  getFields() {
    return [
      {
        name: 'F5_field_1',
        label: 'Чистая прибыль',
        placeholder: 'Введите чистую прибыль',
      },
      {
        name: 'F5_field_2',
        label: 'Средняя стоимость активов',
        placeholder: 'Введите среднюю стоимость активов',
      },
    ]
  }
}
