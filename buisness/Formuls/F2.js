import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class F2 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F2'
  static href = 'f2'
  static name = 'Продажи'
  static description =
    'Рассчитайте рентабельность продаж для повышения рентабельности'

  calculate({ f2_field_1, f2_field_2 }) {
    this.result = f2_field_1 / f2_field_2
    return this
  }

  getFields() {
    return [
      {
        name: 'f2_field_1',
        label: 'Прибыль до уплаты налога',
        placeholder: 'Введите доход прибыль до уплаты налога',
      },
      {
        name: 'f2_field_2',
        label: 'Выручка от продаж',
        placeholder: 'Введите выручка от продаж',
      },
    ]
  }
}
