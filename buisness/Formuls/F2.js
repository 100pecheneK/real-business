import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'
import textPrerender from '../../utils/textPrerender'

export default class F2 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F2'
  static href = 'f2'
  static name = 'Продажи'
  static image = { src: '1.jpg', width: '500em', height: '450em' }
  static text = [
    textPrerender.p(
      'Рентабельность продаж – это соотношение доходов, вырученных от реализации товаров либо услуг, и общей прибыли компании. Этот метод применяют для определения доли прибыли, приходящейся на каждый рубль, полученный предпринимателем.'
    ),
    textPrerender.p(
      'Настоящий коэффициент применяют в ходе ценообразования или для оценки полного объема издержек компании. Но получить полную картину производительности можно при сравнении ROS с данными фирм, действующих в том же сегменте, изготавливающих похожую продукцию. Расчет рентабельности бизнеса в продажах производится так:'
    ),

    textPrerender.b(
      'ROS = (прибыль до уплаты налога / выручка от продаж) × 100 %.'
    ),
    textPrerender.p(
      'В иных случаях для более точной картины в расчетах применяют значение чистой прибыли или окончательного дохода компании за исключением издержек и разного рода платежей, типа кредитных или налоговых.'
    ),
  ]

  calculate({ f2_field_1, f2_field_2 }) {
    this.result = f2_field_1 / f2_field_2
    return this
  }

  getFields() {
    return [
      {
        name: 'f2_field_1',
        label: 'Прибыль до уплаты налога',
        placeholder: 'Введите доход прибыль до уплаты налога',
      },
      {
        name: 'f2_field_2',
        label: 'Выручка от продаж',
        placeholder: 'Введите выручка от продаж',
      },
    ]
  }
}
