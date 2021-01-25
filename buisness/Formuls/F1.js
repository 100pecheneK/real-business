import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'
import textPrerender from '../../utils/textPrerender'

export default class F1 extends AbstractFormula {
  static _status = STATUS.MAIN
  static _formulaName = 'F1'
  static href = 'f1'
  static name = 'Бизнес'
  static text = [
    textPrerender.p(
      'Лучше понять предмет можно на простом примере расчета рентабельности бизнес-проекта по упомянутой ранее формуле.'
    ),
    textPrerender.p('Исходная информация:'),
    textPrerender.ol([
      'Совокупные затраты (приобретение сырья, аренда, зарплата персонала, материальные ресурсы, ГСМ и т. д.) – 20 млн рублей.',
      'Совокупная прибыль (выручка) – 24 млн рублей.',
    ]),
    textPrerender.p('Сначала высчитаем прибыль: доход −расход = 4 млн рублей.'),
    textPrerender.p(
      'Рентабельность = (4 млн рублей/20 млн рублей) × 100 = 20 %'
    ),
    textPrerender.p(
      'Можно делать такие расчеты за разные периоды – месяц, квартал или год. Удобнее считать уровень рентабельности бизнеса по отдельности для каждой категории товара или каждого филиала компании.'
    ),

    textPrerender.p(
      'Важно проводить сравнение показателей в динамике, инициировать их повышение. Таким же образом делается отдельный расчет рентабельности активов бизнеса, капиталов, персонала и прочего. Экономический анализ требует серьезных подходов. Он дает возможность выявить у компании слабые места и увеличить ее показатели прибыльности.'
    ),
  ]

  calculate({ F1_field_1, F1_field_2 }) {
    this.result = (F1_field_1 - F1_field_2) / F1_field_2
    return this
  }

  getFields() {
    return [
      {
        name: 'F1_field_1',
        label: 'Доход',
        placeholder: 'Введите ваш доход',
      },
      {
        name: 'F1_field_2',
        label: 'Расход',
        placeholder: 'Введите ваш расход',
      },
    ]
  }
}
