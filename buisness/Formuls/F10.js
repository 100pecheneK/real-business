import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class F10 extends AbstractFormula {
  static _status = STATUS.BONUS
  static _formulaName = 'F10'
  static href = 'f10'
  static name = 'Точка безубыточности'
  static description = 'Рассчитайте точку безубыточности'

  calculate({ F10_field_1, F10_field_2, F10_field_3 }) {
    this.result = (F10_field_1 * F10_field_2) / (F10_field_2 * F10_field_3)
    return this
  }

  getFields() {
    return [
      {
        name: 'F10_field_1',
        label: 'Постоянные затраты',
        placeholder: 'Введите постоянные затраты',
      },
      {
        name: 'F10_field_2',
        label: 'Выручка',
        placeholder: 'Введите выручку',
      },
      {
        name: 'F10_field_3',
        label: 'Переменные затраты',
        placeholder: 'Введите переменные затраты',
      },
    ]
  }
}
