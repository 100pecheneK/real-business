import textPrerender from '../../utils/textPrerender'
import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class F7 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F7'
  static href = 'f7'
  static name = 'Капитал'
  static text = [
    textPrerender.p(
      'Коэффициент ROE определяется процентным соотношением чистого дохода предприятия к его основному капиталу. Эта величина используется инвесторами для оценки продуктивности эксплуатации собственных средств компании, обоснованности политики управления ресурсами. Как посчитать рентабельность бизнеса с точки зрения эффективности использования собственных средств:'
    ),
    textPrerender.b(
      'ROE = (чистая прибыль за год / собственный капитал) × 100 %.'
    ),
    textPrerender.p(
      'При вынесении решения о финансировании бизнеса заемными деньгами сравнивают ставку по банковскому кредиту с коэффициентом ROE. Если показатель ROE имеет большую величину, то выдача кредита считается целесообразной и экономически обоснованной. При иных обстоятельствах лучше не привлекать посторонние средства.'
    ),
  ]
  calculate({ F7_field_1, F7_field_2 }) {
    this.result = F7_field_1 / F7_field_2
    return this
  }

  getFields() {
    return [
      {
        name: 'F7_field_1',
        label: 'Чистая прибыль за год',
        placeholder: 'Введите чистую прибыль за год',
      },
      {
        name: 'F7_field_2',
        label: 'Собственный капитал',
        placeholder: 'Введите собственный капитал',
      },
    ]
  }
}
