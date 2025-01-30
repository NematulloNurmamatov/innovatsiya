import React from 'react';
import { Carousel as AntdCarousel } from 'antd'; // Ant Design carouselni import qilamiz
import 'antd/dist/reset.css'; // Ant Designning default stilini import qilamiz
import '../styles/carousel.css'; // Yangi CSS faylini import qilamiz
import bir from '../assets/carousel_img/1.jpg'; // Rasmni import qilamiz
import ikki from '../assets/carousel_img/2.jpg'; // Rasmni import qilamiz
import uch from '../assets/carousel_img/3.jpg'; // Rasmni import qilamiz
import tort from '../assets/carousel_img/4.jpeg'; // Rasmni import qilamiz
import besh from '../assets/carousel_img/5.jpg'; // Rasmni import qilamiz
import mountain from '../assets/carousel_img/mountain.jpg'; // Rasmni import qilamiz
import mountain2 from '../assets/carousel_img/mountain2.jpg'; // Rasmni import qilamiz
import mountain3 from '../assets/carousel_img/mountain3.jpg'; // Rasmni import qilamiz



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