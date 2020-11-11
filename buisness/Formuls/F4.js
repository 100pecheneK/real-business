import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class F4 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F4'
  static href = 'f4'
  static name = 'Продукция'
  static description =
    'Рассчитайте рентабельность продукции для повышения рентабельности'

  calculate({ F4_field_1, F4_field_2 }) {
    this.result = F4_field_1 / F4_field_2
    return this
  }

  getFields() {
    return [
      {
        name: 'F4_field_1',
        label: 'Прибыль от продажи продукта',
        placeholder: 'Введите прибыль от продажи продукта',
      },
      {
        name: 'F4_field_2',
        label: 'Себестоимость продукта',
        placeholder: 'Введите себестоимость продукта',
      },
    ]
  }
}
