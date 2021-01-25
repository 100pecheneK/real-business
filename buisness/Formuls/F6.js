import textPrerender from '../../utils/textPrerender'
import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class F6 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F6'
  static href = 'f6'
  static name = 'Инвестиции'

  static text = [
    textPrerender.p(
      'ROI – показатель того, как относится доход, полученный в ходе инвестирования, к объему начальных капиталовложений. Такой коэффициент позволяет рассчитать доход от каждого вложенного в бизнес рубля. Рентабельность бизнеса по формуле расчета с точки зрения эффективности эксплуатации используемых инвестиций выглядит так:'
    ),
    textPrerender.b(
      'ROI = (чистая прибыль + (цена продажи актива – цена покупки актива) / цена покупки актива) × 100 %.'
    ),
    textPrerender.p(
      'Если проект не завершен и окончательная стоимость активов неизвестна, то в расчете применяется цена на первоначальном этапе инвестирования. Коэффициент ROI с превышением нулевого значения говорит о целесообразности размещения средств, а его отрицательная величина указывает на предстоящие убытки.'
    ),
  ]
  calculate({ F6_field_1, F6_field_2, F6_field_3 }) {
    this.result = (F6_field_1 + (F6_field_2 - F6_field_3)) / F6_field_3
    return this
  }

  getFields() {
    return [
      {
        name: 'F6_field_1',
        label: 'Чистая прибыль',
        placeholder: 'Введите чистую прибыль',
      },
      {
        name: 'F6_field_2',
        label: 'Цена продажи актива',
        placeholder: 'Введите цену продажи актива',
      },
      {
        name: 'F6_field_3',
        label: 'Цена покупки актива',
        placeholder: 'Введите цену покупки актива',
      },
    ]
  }
}
