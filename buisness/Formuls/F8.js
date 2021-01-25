import textPrerender from '../../utils/textPrerender'
import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class F8 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F8'
  static href = 'f8'
  static name = 'Основные средства'

  static image = { src: '7.jpg', width: '700em', height: '450em' }
  static text = [
    textPrerender.p(
      'Коэффициент рентабельности основных средств высчитывают для оценки эффекта от их привлечения в экономику предприятия. В понятие «основные средства» входит весь перечень задействованных в производственном процессе объектов, не изменяющих своих первоначальных габаритов. Проще говоря, речь идет:'
    ),
    textPrerender.ul([
      'о производственных и складских зданиях и сооружениях',
      'станках, оборудовании и агрегатах',
      'грузовом автотранспорте и погрузочной технике',
      'парке легковых автомобилей и транспортных средств для перевозки пассажиров',
      'офисной мебели и оргтехнике',
      'дорогостоящих инструментах и приспособлениях',
    ]),
    textPrerender.p(
      'Процент рентабельности бизнеса в значении эффективности применения основных средств рассчитывается:'
    ),
    textPrerender.b(
      'ROFA = (чистая прибыль / стоимость основных средств) × 100 %.'
    ),
  ]
  calculate({ F8_field_1, F8_field_2 }) {
    this.result = F8_field_1 / F8_field_2
    return this
  }

  getFields() {
    return [
      {
        name: 'F8_field_1',
        label: 'Чистая прибыль',
        placeholder: 'Введите чистую прибыль',
      },
      {
        name: 'F8_field_2',
        label: 'Стоимость средств',
        placeholder: 'Введите стоимость средств',
      },
    ]
  }
}
