import textPrerender from '../../utils/textPrerender'
import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class F9 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F9'
  static href = 'f9'
  static name = 'Персонал'
  static text = [
    textPrerender.p(
      'ROL означает отношение чистого дохода, полученного за некий период времени, к общему числу служащих, работающих в компании в указанное время. Так можно оптимально рассчитать число штатных единиц, позволяющее получить максимальную прибыль при минимальных затратах.'
    ),

    textPrerender.p(
      'Определить данный параметр рентабельности бизнеса можно по формуле:'
    ),

    textPrerender.b(
      'ROL = (чистая прибыль / количество работников на предприятии).'
    ),

    textPrerender.p(
      'Вместе с этим коэффициентом специалисты зачастую пользуются другими показателями, более информативными:'
    ),

    textPrerender.ul([
      'отношением затрат на содержание персонала к прибылям фирмы',
      'отношением затрат на содержание определенных филиалов или подразделений к непосредственно их прибыли',
      'личной рентабельностью сотрудника – отношением расходов на работника к прибыли, принесенной им в бюджет компании',
    ]),
    textPrerender.p(
      'Так ROL дает возможность достичь самой максимальной производительности труда, выявляя отделы, которые нужно сократить или расширить.'
    ),
  ]
  calculate({ F9_field_1, F9_field_2 }) {
    this.result = F9_field_1 / F9_field_2
    return this
  }

  getFields() {
    return [
      {
        name: 'F9_field_1',
        label: 'Чистая прибыль',
        placeholder: 'Введите чистую прибыль',
      },
      {
        name: 'F9_field_2',
        label: 'Количество работников на предприятии',
        placeholder: 'Введите количество работников на предприятии',
      },
    ]
  }
}
