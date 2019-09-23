import React from 'react';

import Layout from '../components/Layout';

import gif1 from '../assets/images/gif01.gif';
import gif2 from '../assets/images/gif02.gif';
import gif3 from '../assets/images/gif03.gif';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/logo_white.png';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
           <img src={pic8} alt="" width="50%" height="auto"/>
         <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/Contact" className="image">
            <img src={gif1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Создание сайтов-визиток</h2>
            <p>
              Сайт-визитка - это одностраничный сайт, который является визитной карточкой Вашего бизнеса. 
              Такой сайт открывает для Вас новых клиентов, большинство из которых проводит все больше и больше времени он-лайн.   
            </p>
            <a href="/Contact" className="special">
            Заказать разработку сайта
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/Contact" className="image">
            <img src={gif2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Поисковая оптимизация для Yandex | Google - SEO</h2>
            <p>
            Поисковая оптимизация может улучшить Ваш сайт и сэкономить время при поиске Вашего сайта клиентами. 
            Мы поможем сделать Ваш сайт видимым в поисковых сетях Yandex и Google, таким образом, с помощью правильно настроенной поисковой оптимизации, 
            Вы сможете быстрее привлечь новых клиентов.
            </p>
            <a href="/Contact" className="special">
            Заказать услугу
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/Contact" className="image">
            <img src={gif3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Разработка интернет-магазинов</h2>
            <p>
              Хотите продавать Ваши услуги или товары через интернет? 
              Мы поможем Вам в создании Вашего интернет-магазина под ключ. Мы берем на себя все, от дизайна до хостинга.
            </p>
            <a href="/Contact" className="special">
            Заказать разработку интернет-магазина
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Наши цены</h2>
          <p>
            Чтобы подробнее ознакомиться с нащими ценами нажмите на кнопку ниже.
          </p>
          
          <ul className="actions">
            <li>
              <a href="/Prices" className="button">
                Цены
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);


export default IndexPage;
