import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'
import textPrerender from '../../utils/textPrerender'

export default class F5 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F5'
  static href = 'f5'
  static name = 'Активы'
  static image = { src: '4.jpg', width: '500em', height: '450em' }
  static text = [
    textPrerender.p(
      'Эта величина используется как параметр эффективного применения активов предприятия с расчетом получения дохода, а также результативности политики управления ресурсами предприятия и окупаемости бизнеса, оперирующего собственными средствами. При расчете ROA требуется учет всего объема оборотных и внеоборотных активов, которыми распоряжается организация или привлеченных ею в процессе ведения бизнеса. Рентабельность бизнеса в области эффективности эксплуатации используемых ресурсов высчитывается так:'
    ),
    textPrerender.b(
      'ROA = (чистая прибыль / средняя стоимость активов за период) × 100 %.'
    ),
    textPrerender.p(
      'Систематически определяя этот коэффициент, легче обнаружить активы, не приносящие дохода, и в дальнейшем продать их или модернизировать, или передать в аренду.'
    ),
  ]
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
