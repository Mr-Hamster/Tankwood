import React from "react";
import "./work.css";

export default class Header extends React.Component {
    render() {
        return(
                <div className="wrapper-work">
                    
                    <div className="body_wrapper">
                    <a href="#products"><button className="change_products" type="submit">Каталог</button></a>
                    <a href="#contacts"><button className="change_products" type="submit">Контакты</button></a>
                    </div>
                    
                    
                    <div className="about-company">
                    <br></br>
                        <div className="text_work">
                        ИЗМЕЛЬЧИТЕЛИ ВЕТОК ТМ TANKWOOD
                        </div> 
                        <div className="text_work">ЭТО НАДЕЖНОСТЬ И КАЧЕСТВО ПРОВЕРЕНОЕ ОПЫТОМ И ВРЕМЕНЕМ.</div>
                        <p className="about-company-text">
                        Компания работает на рынке Украины более 3-ох лет. За время существования были разработаны разные модели и модификации веткоизмельчителей. Соответствующие потребностям и пожеланиям наших клиентов. Компания находится в маленьком городе Светловодск, который в не давнем прошлом занимался выпуском комплектующих для военной техники.В основе производства лежит надежность выпускаемой продукции. Каждый узел агрегата подогнан с претензионной точностью. Что в свою очередь предотвращает возникновения люфтов и обеспечивает долгую работу измельчителя. Tankwood абсолютные чемпионы в производительности по сравнению с конкурентами. Добились выхода готовой продукции до 10.5 м3/час. Это высокопроизводительные модели 12B16, 12B16M, 12B16K, 12B16KM.
                        </p>
                        
                    </div>
                    <div className="border"></div>
                    <br></br>
                    <div className="text_work">КАК МЫ РАБОТАЕМ</div>
                    <br></br>
                    <div className="how-work">
                       <div className="elements">
                           <div className="elements-work">
                                <div className="image-work"><img src={require("../../static/image/work-div/phone.png")}></img></div>
                               
                               <div className="text-work">ВЫ ЗВОНИТЕ НАМ</div>
                           </div>
                        </div>
                        <div className="hr"></div>
                        <div className="elements">
                        <div className="elements-work">
                                <div className="image-work"><img src={require("../../static/image/work-div/choose.png")}></img></div>
                              
                               <div className="text-work">ВЫБИРАЕМ МОДЕЛЬ ИЗМЕЛЬЧИТЕЛЯ ВЕТОК</div>
                              
                           </div>
                        </div>
                        <div className="hr"></div>
                        <div className="elements">
                        <div className="elements-work">
                                <div className="image-work"><img src={require("../../static/image/work-div/details.png")}></img></div>
                              
                               <div className="text-work">УТОЧНЯЕМ ДЕТАЛИ ЗАКАЗА</div>
                               
                           </div>
                        </div>
                        <div className="hr"></div>
                        <div className="elements"> 
                        <div className="elements-work">
                            <div className="image-work"><img src={require("../../static/image/work-div/box.png")}></img></div>
                              
                                <div className="text-work">ДОСТАВЛЯЕМ ТОВАР ПЕРЕВОЗЧИКОМ</div>
                            
                           </div>
                        </div>
                        <div className="hr"></div>
                        <div className="elements"> 
                        <div className="elements-work">
                                <div className="image-work"><img src={require("../../static/image/work-div/diamond.png")}></img></div>
                              
                               <div className="text-work">ВЫ-ОБЛАДАТЕЛЬ ИЗМЕЛЬЧИТЕЛЯ ВЕТОК TANKWOOD!</div>
                              
                           </div>
                        </div>
                    
                        <br></br>
                        
                    </div>
                    
                    <div className="border"></div>
                </div>
        );
    }
}
{/* <div className="number_work">02</div> <img src={require("../../static/image/work-div/phone.png")}></img>*/}