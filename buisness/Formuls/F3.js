import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'
import textPrerender from '../../utils/textPrerender'

export default class F3 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F3'
  static href = 'f3'
  static name = 'Производство'
  static image = { src: '2.jpg', width: '700em', height: '450em' }
  static text = [
    textPrerender.p(
      'Говоря о чистой рентабельности бизнеса, мы имеем в виду отношение показателя чистой либо валовой прибыли к совокупности средств, потраченных на изготовление продукции. Зная значение этого коэффициента, можно определить долю прибыли, которую предприятие извлекает за каждый использованный рубль, и выяснить, насколько эффективно использован капитал.'
    ),
    textPrerender.p(
      'Подсчет эффективности производства не обязательно производят для компании в целом, иногда показатель требуется для отдельных ее звеньев. Таким способом определяется целесообразность ведения операций в разных направлениях, в особенности если в область интересов предприятия входят несколько сфер деятельности. Рентабельность производства бизнеса рассчитывают по формуле:'
    ),
    textPrerender.b(
      'РП = (прибыль / (стоимость основных фондов + сумма оборотных средств)) × 100 %.'
    ),
  ]
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
