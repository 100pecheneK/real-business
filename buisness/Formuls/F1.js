import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class F1 extends AbstractFormula {
  static _status = STATUS.MAIN
  static _formulaName = 'F1'
  static href = 'f1'
  static name = 'Бизнес'
  static description =
    'расчитайте рентабельность и найдите своё решение для увеличения прибыли'

  calculate({ F1_field_1, F1_field_2 }) {
    this.result = (F1_field_1 - F1_field_2) / F1_field_2
    return this
  }

  getFields() {
    return [
      {
        name: 'F1_field_1',
        label: 'Доход',
        placeholder: 'Введите ваш доход',
      },
      {
        name: 'F1_field_2',
        label: 'Расход',
        placeholder: 'Введите ваш расход',
      },
    ]
  }
}
