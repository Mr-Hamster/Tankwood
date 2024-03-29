import React from 'react';
import './App.css';
import SmartSlider from "react-smart-slider";
import Head_line from './components/head_line/head_line';
import Footer from './components/footer/footer';
import ScrollableAnchor from 'react-scrollable-anchor'
import Header from './components/work-div/header';
import ScrollUpButton from "react-scroll-up-button";
import Products from './components/products';

const arr = [
  {
    name: "ИЗМЕЛЬЧИТЕЛЬ ВЕТОК ТМ TANKWOOD B12",
    price:"14 950 ГРН",
    description:"Это отличный помощник по переработки веток в дешёвое топливо. Продукция полученная с помощью данного процесса может быть использована как топливо для пиролизных и твердотопливных котлов, каминов, печей, а также при производстве древесного угля. Блок абсолютно универсален и в зависимости от выбранной модификации может агрегатироваться как с двигателями внутреннего згорания, электродвигателями так и с тракторами.",
    photo:[ 
      require("./static/image/B12/1.jpg"),
      require("./static/image/B12/2.jpg"),
      require("./static/image/B12/3.png"),
      require("./static/image/B12/4.jpg")
    ],
    row_about:[ 
      'Толщина стенок - 20 мм!','От заточки до заточки - 200-250 м3!','Корпус цельносварной! - Толщина 20 мм!','Валы квадратные - 55*55 мм!','Подшипники закрытого типа! - 210; 308;','Приводной вал на выбор: - 6,8 шлицов!','Толщина ножа - 10 мм!','Угол заточки режущей кромки - 30 градусов!','Закалка твердости! - 53 единицы','Габаритные размеры: Высота - 485 мм!','Ширина - 225 мм!','Длинна - 250мм!','Вес - 70 кг!'
    ],
    row_about1:[ 
      'Производительность до 10.5 м3/час!','Максимальный диаметр ветки - 120 мм!','Длинна полученной заготовки - 60-90 мм!','Шестерни Комбайна! На шлицах! Доп крышки!','Ножи сталь 65 Г!','Магнитогорского Металургического Комбината!','Наличие всех отверстий для крепежа бункеров, защитных крышек и самого аппарата!','Oфициальная гарантия 12 месяцев','Надежность от производителя.'
    ],
    youtube:'9rDCr6_TSMk',
  },

  {
    name: "ИЗМЕЛЬЧИТЕЛЬ ВЕТОК ТМ TANKWOOD 120 T",
    price:"23 500 ГРН",
    description:"Надежный измельчитель веток который агрегатируеться непосредственно с тракторами. Tankwood 120 T с производительностью 60 м3/смену станет отличным партнером Вашей технике. Заготавливать топливо ещё не было так легко. Привод от карданного вала, на выбор: 6 и 8 шлицов.",
    photo:[ 
      require("./static/image/120T/1.png"),
      require("./static/image/120T/2.png"),
      require("./static/image/120T/3.png"),
      require("./static/image/120T/4.png")
    ],
    row_about:[ 
      'Корпус цельносварной - Толщина 20 мм!','Валы квадратные - 55*55 мм!','Подшипники закрытого типа - 210!','Подшипники с посадочным местом под вал - 50 мм!','Толщина ножа - 10 мм!','Ширина - 180 мм!','Угол заточки режущей кромки - 30 градусов!','Габаритные размеры: Высота - 1080 мм!','Ширина - 680 мм!','Длина - 1280 мм!','Вес - 100 кг!',
    ],
    row_about1:[ 
      'Легко агрегатируется с тракторами.','Максимальный диаметр ветки - 120 мм!','Длинна полученной заготовки - 80-90 мм!','Шестерни с коробки передач комбайна.','Посажены на валы на шлицах!Не шпонка!','Дополнительно с обеих сторон установлены металические крышки для защиты подшипников!','Ножи сталь - 65 Г!', 'Позволяет рубить не только ветки но и доски приличной ширины!','Полуавтоматическая сварка.Порошковая покраска.','Надежность от производителя.'
    ],
    youtube:'-kLilv-4eL8',
  },

  {
    name: "ИЗМЕЛЬЧИТЕЛЬ ВЕТОК ТМ TANKWOOD 120 TPRO",
    price:"26 500 ГРН",
    description:"Tankwood 120 Tpro предназначен заготавливать топливо с веток и дров. Главной особенностью является большой диаметр перерабатываемой ветки и наличие конусного дровокола, с помощью которого можно быстро колоть дрова.",
    photo:[ 
      require("./static/image/120TPRO/1.png"),
      require("./static/image/120TPRO/2.png"),
      require("./static/image/120TPRO/3.png"),
      require("./static/image/120TPRO/4.png"),
      require("./static/image/120TPRO/5.png"),
      require("./static/image/120TPRO/6.png")
    ],
    row_about:[ 
      'Корпус цельносварной - Толщина 20 мм!','Валы квадратные - 55*55 мм!', 'Дровокол.Производительность - 7.5м3/час.', 'Подшипники закрытого типа - 210!','Подшипники с посадочным местом под вал - 50 мм!','Толщина ножа - 10 мм!','Ширина - 180 мм!','Угол заточки режущей кромки - 30 градусов!','Габаритные размеры: Высота - 1080 мм!','Ширина - 680 мм!','Длина - 1280 мм!','Вес - 100 кг!',
    ],
    row_about1:[ 
      'Легко агрегатируется с тракторами.','Максимальный диаметр ветки - 120 мм!','Длинна полученной заготовки - 80-90 мм!','Шестерни с коробки передач комбайна.','Посажены на валы на шлицах!Не шпонка!','Дополнительно с обеих сторон установлены металические крышки для защиты подшипников!','Ножи высокопрочная сталь - 65 Г!', 'Позволяет рубить не только ветки но и доски приличной ширины!','Порошковая покраска.Шестерни посажены на шлицы.','Надежность от производителя.'
    ],
    youtube:'iYDRoTLO-z0',
  },

  {
    name: "ИЗМЕЛЬЧИТЕЛЬ ВЕТОК ТМ TANKWOOD 12B16",
    price:"39 500 ГРН",
    description:"Служит отличным помощником в заготовке дешёвого топлива. Может устанавливаться на автомобильный прицеп. И быть мобильным. Также его можно устанавливать стационарно. Аппарат полностью автономный. Одной заправки топлива А-92 будет вполне достаточно для рабочей смены.",
    photo:[ 
      require("./static/image/12B16/1.jpg"),
      require("./static/image/12B16/2.jpg"),
      require("./static/image/12B16/3.jpg"),
      require("./static/image/12B16/4.jpg"),
    ],
    row_about:[ 
      'Двигатель - Weima WM-190 FSE.','Расход топлива А-92 = 900 грамм/час!',
      'Корпус цельносварной - Толщина 20 мм!','Валы квадратные - 55*55 мм!', 'Дровокол.Производительность - 10.5м3/час.', 'Подшипники закрытого типа - 210!','Подшипники с посадочным местом под вал - 50 мм!','Габаритные размеры: Высота - 1390 мм!','Ширина - 580 мм!','Длина - 1280 мм!','Вес - 175 кг!',
    ],
    row_about1:[ 
      'Автономность аппарата.','Мобильность. Легко устанавливается на авто-прицеп.','Маховик до 30кг.','Придаёт большую инерционную силу','Порошковая покраска.','Надежность от производителя.','Блок Tankwood B12!'
    ],
    youtube:'5rk2xbW01bc',
  },

  {
    name: "ИЗМЕЛЬЧИТЕЛЬ ВЕТОК ТМ TANKWOOD 12B16K",
    price:"43 900 ГРН",
    description:"Служит отличным помощником в заготовке дешёвого топлива. Имеет колёсную базу. Два фаркопа что в свою очередь позволяет легко транспортировать аппарат и прицеп. Одной заправки топлива А-92 будет вполне достаточно для рабочей смены.",
    photo:[ 
      require("./static/image/12B16K/1.jpg"),
      require("./static/image/12B16K/2.jpg"),
      require("./static/image/12B16K/3.jpg"),
      require("./static/image/12B16K/4.jpg"),
      require("./static/image/12B16K/5.jpg")
    ],
    row_about:[ 
      'Двигатель - Weima WM-190 FSE.','Расход топлива А-92 = 900 грамм/час!',
      'Корпус цельносварной - Толщина 20 мм!','Валы квадратные - 55*55 мм!', 'Дровокол.Производительность - 10.5м3/час.', 'Подшипники закрытого типа - 210!','Подшипники с посадочным местом под вал - 50 мм!','Габаритные размеры: Высота - 1390 мм!','Ширина - 580 мм!','Длина - 1280 мм!','Вес - 175 кг!',
    ],
    row_about1:[ 
      'Мобильность. Легко устанавливается на авто-прицеп.','Маховик до 30кг.','Придаёт большую инерционную силу','Порошковая покраска.','Надежность от производителя.','Блок Tankwood B12!','Два фаркопа','Максимальная скорость до 70 км/час.'
    ],
    youtube:'q0abZYe-9Es',
  },

  {
    name: "ИЗМЕЛЬЧИТЕЛЬ ВЕТОК TANKWOOD 12B18KPRO",
    price:"49 950 ГРН",
    description:"Tankwood 12B18Kpro улучшеный измельчитель веток. Имеет в своём арсенале мощный двигатель, электростартер, большие колёса усиленную раму, широкую колесную базу и маховик.",
    photo:[ 
      require("./static/image/12B18KPRO/1.png"),
      require("./static/image/12B18KPRO/2.png"),
      require("./static/image/12B18KPRO/3.png"),
      require("./static/image/12B18KPRO/4.png"),
      require("./static/image/12B18KPRO/5.png")
    ],
    row_about:[ 
      'Двигатель - Weima WM-192 FS. 18 л.с!','Расход топлива А-92 = 1.2 л/час!',
      'Режущий блок Tankwood B12.', 'Подшипники закрытого типа - 210!', 'Габаритные размеры: Высота - 1400 мм!','Ширина - 1290 мм!','Длина - 2250 мм!','Вес - 195 кг!',
    ],
    row_about1:[ 
      'Максимальный диаметр 120 мм.','Маховик','Усиленная рама. ','Производительность до 12м3/час.','Надежность от производителя.', 'Большие колёса 16*6 50-8.', 'Двигатель 18 л.с.','Электростартер.','Аккумулятор.'
    ],
    youtube:'6t7smtVR4AI',
  },

  {
    name: "ИЗМЕЛЬЧИТЕЛЬ ВЕТОК TANKWOOD 120 TT",
    price:"58 000 ГРН",
    description:"Измельчитель веток агрегатируется с тракторами. Имеет в своей комплектации транспортер. Который в свою очередь повышает производительность труда в разы. И служит отличным помощником в загрузке полученной продукции. Тем самым максимально экономит время работы.",
    photo:[ 
      require("./static/image/120TT/6.png"),
      require("./static/image/120TT/5.png"),
      require("./static/image/120TT/4.png"),
      require("./static/image/120TT/3.png"),
    ],
    row_about:[ 
      'Производительность от 7.5 м3/час.','Максимальный диаметр 120 мм.', 'Длинна полученой заготовки 80 - 90 мм',
    ],
    row_about1:[ 
      'Надежность от производителя.', 'Полуавтоматическая сварка.','Порошковая покраска.','Наличие транспортера.'
    ],
    youtube:'2kCDv7gUUCY',
  },

  {
    name: "ИЗМЕЛЬЧИТЕЛЬ ВЕТОК TANKWOOD 12B18KT",
    price:"83 500 ГРН",
    description:"Tankwood 12B18KT улучшеный измельчитель веток. Имеет транспортёр. Служит для быстрой заготовки дров в больших количествах. С малыми трудовыми затратами.",
    photo:[ 
      require("./static/image/12B18KT/1.png"),
      require("./static/image/12B18KT/2.png"),
      require("./static/image/12B18KT/3.png"),
      require("./static/image/12B18KT/4.png"),
    ],
    row_about:[ 
      'Режущий блок Tankwood B12.','Двигатель Weima 192 FS. 18 л.с!', 'Расход топлива 1.2 л/час!',' Габаритные размеры: высота 2900 мм!','Ширина 1290 мм!','Длинна 1300 мм!', 'Вес 275 кг!'
    ],
    row_about1:[ 
      'Надежность от производителя.', 'Производительность 10.5 м3/час.','Большой диаметр ветки 120 мм.', 'Фаркоп', 'Большие колёса.','Наличие транспортёра!','Бензиновый двигатель 18 л.с.'
    ],
    youtube:'oYZ-aJTtOBk',
  },
]

export default class App extends React.Component {
  render() {
    const slidesArray = [
      {
        url: require("./static/image/11.jpg")
      },
      {
        url: require("./static/image/2.jpeg")
      },
      {
        url: require("./static/image/1.jpg")
      },
    ];
    return (
      <div className="App">
     <ScrollUpButton/>
      <ScrollableAnchor id="main">
        <Head_line/>
      </ScrollableAnchor>
      <SmartSlider slides={slidesArray} autoSlide={true} />
      <ScrollableAnchor id="working">
        <Header/>
      </ScrollableAnchor>
      <ScrollableAnchor id="products">
             <div>
                {
                  arr.map(item =>{ 
                    return(
                      <Products item={item} />
                    )
                  })
                }
              </div>
      </ScrollableAnchor>
      <ScrollableAnchor id="contacts">
        <Footer/>
      </ScrollableAnchor>
      </div>
    );
  }
}


