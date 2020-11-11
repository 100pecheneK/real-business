import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class F6 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F6'
  static href = 'f6'
  static name = 'Инвестиции'
  static description =
    'Рассчитайте рентабельность инвестиций для повышения рентабельности'

  calculate({ F6_field_1, F6_field_2, F6_field_3 }) {
    this.result = (F6_field_1 + (F6_field_2 - F6_field_3)) / F6_field_3
    return this
  }

  getFields() {
    return [
      {
        name: 'F6_field_1',
        label: 'Чистая прибыль',
        placeholder: 'Введите чистую прибыль',
      },
      {
        name: 'F6_field_2',
        label: 'Цена продажи актива',
        placeholder: 'Введите цену продажи актива',
      },
      {
        name: 'F6_field_3',
        label: 'Цена покупки актива',
        placeholder: 'Введите цену покупки актива',
      },
    ]
  }
}
