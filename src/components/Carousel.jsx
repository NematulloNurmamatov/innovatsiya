import React from 'react';
import { Carousel as AntdCarousel } from 'antd'; 
import 'antd/dist/reset.css'; 
import '../styles/carousel.css'; 
import bir from '../assets/carousel_img/1.jpg'; 
import ikki from '../assets/carousel_img/2.jpg';
import uch from '../assets/carousel_img/3.jpg'; 
import tort from '../assets/carousel_img/4.jpeg';
import besh from '../assets/carousel_img/5.jpg';
import mountain from '../assets/carousel_img/mountain.jpg';
import mountain2 from '../assets/carousel_img/mountain2.jpg'; 
import mountain3 from '../assets/carousel_img/mountain3.jpg'; 



const Carousel = () => {
    return (
        <div className='fullContainer'>
            <AntdCarousel arrows autoplay>
                <div className="carousel-slide">
                    <img src={mountain} alt="Slide 1" />
                    <h3>
                        Узгидромет предупредил о лавинной опасности в семи областях республики
                    </h3>
                    <p>
                        Граждан, проживающих в горных районах, отдыхающих и водителей, выезжающих в горные
                        районы, попросили соблюдать меры предосторожности.
                    </p>
                    <button className='button'>Подробнее</button>
                </div>
                <div className="carousel-slide">
                    <img src={ikki} alt="" />
                    <h3>
                        Узгидромет предупредил о лавинной опасности в семи областях республики
                    </h3>
                    <p>
                        Граждан, проживающих в горных районах, отдыхающих и водителей, выезжающих в горные
                        районы, попросили соблюдать меры предосторожности.
                    </p>
                    <button className='button'>Подробнее</button>
                </div>
                <div className="carousel-slide">
                    <img src={mountain3} alt="" />
                    <h3>
                        Узгидромет предупредил о лавинной опасности в семи областях республики
                    </h3>
                    <p>
                        Граждан, проживающих в горных районах, отдыхающих и водителей, выезжающих в горные
                        районы, попросили соблюдать меры предосторожности.
                    </p>
                    <button className='button'>Подробнее</button>
                </div>
                <div className="carousel-slide">
                    <img src={tort} alt="Slide 4" />
                    <h3>
                        Узгидромет предупредил о лавинной опасности в семи областях республики
                    </h3>
                    <p>
                        Граждан, проживающих в горных районах, отдыхающих и водителей, выезжающих в горные
                        районы, попросили соблюдать меры предосторожности.
                    </p>
                    <button className='button'>Подробнее</button>
                </div>
                <div className="carousel-slide">
                    <img src={besh} alt="Slide 5" />
                    <h3>
                        Узгидромет предупредил о лавинной опасности в семи областях республики
                    </h3>
                    <p>
                        Граждан, проживающих в горных районах, отдыхающих и водителей, выезжающих в горные
                        районы, попросили соблюдать меры предосторожности.
                    </p>
                    <button className='button'>Подробнее</button>
                </div>
            </AntdCarousel>
        </div>
    );
};

export default Carousel; 