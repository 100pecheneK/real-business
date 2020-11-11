import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class F3 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F3'
  static href = 'f3'
  static name = 'Производство'
  static description =
    'Рассчитайте рентабельность производства для повышения рентабельности'

  calculate({ F3_field_1, F3_field_2, F3_field_3 }) {
    this.result = F3_field_1 / (F3_field_2 + F3_field_3)
    return this
  }

  getFields() {
    return [
      {
        name: 'F3_field_1',
        label: 'Балансовая прибыль',
        placeholder: 'Введите балансовую прибыль',
      },
      {
        name: 'F3_field_2',
        label: 'Среднегодовая стоимость основных фондов',
        placeholder: 'Введите среднегодовую стоимость основных фондов',
      },
      {
        name: 'F3_field_3',
        label: 'Величина оборотных средств',
        placeholder: 'Введите величину оборотных средств',
      },
    ]
  }
}
