import AbstractFormula from '../AbstractFormula'
import STATUS from '../formulaStatus'

export default class F10 extends AbstractFormula {
  static _status = STATUS.SECONDARY
  static _formulaName = 'F10'
  static href = 'f10'
  static name = 'Точка безубыточности'
  static image = { src: '9.jpg', width: '500em', height: '450em' }
  static text = [
    {
      type: 'p',
      text:
        'Объясняя, что такое рентабельное предприятие, невозможно обойти важный параметр, именуемый точкой безубыточности. Она означает минимальный объем сбыта, достаточный для покрытия всех издержек производства и реализации продукции. Иными словами, коэффициент служит для расчета рентабельности в бизнесе продаж, позволяющего предприятию работать с нулевым эффектом, без доходов, но и без потерь.',
    },
    {
      type: 'p',
      text:
        'Иногда точка безубыточности называется порогом рентабельности, или break-evenpoint (BEP). Определить нижнюю границу объема реализации, достигая которой бизнес становится доходным, можно по формуле:',
    },
    {
      type: 'b',
      text:
        'BEP = (постоянные затраты) × (выручка) / (выручка) – (переменные затраты).',
    },
    {
      type: 'p',
      text:
        'В итоге точка безубыточности зависит от стоимости единицы продукции и от постоянных и переменных затрат на всех этапах производства и продажи товара. Если изменяются эти параметры, сразу же меняется и сам коэффициент: к примеру, увеличение показателя BEP показывает проблемы в ходе получения прибыли или свидетельствует о росте производственных расходов.',
    },
    { type: 'p', text: 'С помощью определения точки безубыточности можно:' },
    {
      type: 'ul',
      li: [
        'дать оценку запасу прочности предприятия',
        'определить проблемы координации бизнес-процессов',
        'обосновать целесообразность инвестиций в дело, которое может окупиться значительно позже',
        'вычислить стоимость, если объем продаж снизится или возрастет',
        'найти значение допустимого порога уменьшения прибыли, не рискуя получить убытки',
      ],
    },
  ]
  calculate({ F10_field_1, F10_field_2, F10_field_3 }) {
    this.result = (F10_field_1 * F10_field_2) / (F10_field_2 * F10_field_3)
    return this
  }

  getFields() {
    return [
      {
        name: 'F10_field_1',
        label: 'Постоянные затраты',
        placeholder: 'Введите постоянные затраты',
      },
      {
        name: 'F10_field_2',
        label: 'Выручка',
        placeholder: 'Введите выручку',
      },
      {
        name: 'F10_field_3',
        label: 'Переменные затраты',
        placeholder: 'Введите переменные затраты',
      },
    ]
  }
}
