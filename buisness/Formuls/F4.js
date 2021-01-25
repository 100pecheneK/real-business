import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'
import textPrerender from '../../utils/textPrerender'

export default class F4 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F4'
  static href = 'f4'
  static name = 'Продукция'
  static text = [
    textPrerender.p('Данный параметр определяется соотношением полученного дохода от реализации продукции к общим расходам на ее изготовление и сбыт. Так рассчитывается процент прибыли, который приходится на каждую денежную единицу, вложенную в себестоимость изделий. ROM – величина достаточно гибкая, с ее помощью подтверждается обоснованность изготовления и полного ассортимента как отдельных категорий товаров, так и определенного типа изделий. Рентабельность определенного типа продукции рассчитывается по формуле:'),
    textPrerender.b('ROM = (прибыль от продажи продукта / себестоимость продукта) × 100 %.')
  ]

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
