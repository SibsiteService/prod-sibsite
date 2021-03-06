import React from 'react';
import Typical from 'react-typical'
import Layout from '../components/Layout';

import gif1 from '../assets/images/pic02.png';
import gif2 from '../assets/images/pic03.png';
import gif3 from '../assets/images/ga-logo.png';
import logo from '../assets/images/logo_white.png';
import ga from '../assets/images/interface-3614766_960_720(1).png';
import domain from '../assets/images/web-design-1327873_960_720.png';

import config from '../../config';
const IndexPage = () => (
  <Layout fullMenu>
    
    <section id="banner">
      <div className="inner">
           <img src={logo} alt="Сибсайт Сервис" width="50%" height="auto"/>
         <h2>{config.heading}</h2>
        <p>
        Добро пожаловать! Мы - Сибсайт Сервис 👋
        </p>
        <p>
          Мы {''}
        <Typical
        loop={Infinity}
        steps={[
                'Занимаемся разработкой сайтов 🌐', 2000,
                'Сдаём сайты в аренду 📑💰', 1000,
                'Делаем все быстро 🚀 и качественно 👍', 1000,
                'Делаем все сайты одинаково красивыми и на компьютере 💻 и на телефоне 📱', 1000,
                'Помогаем увеличить Ваши продажи 📈📢', 1000,

              ]}
        loop={Infinity}
        wrapper="b"
        />
        <br></br>
        <br></br>
        <br></br>
        <a className="actions" href="/Contact" className="button">&nbsp;Оставить заявку&nbsp;</a>
        </p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/Prices" className="image">
            <img src={gif1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Создание сайтов-визиток</h2>
            <p>
              Сайт-визитка - это одностраничный сайт, который является визитной карточкой Вашего бизнеса. 
              Такой сайт открывает для Вас новых клиентов, большинство из которых проводит все больше и больше времени он-лайн.   
            </p>
            <a href="/Prices" className="special">
            Узнать подробнее
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/Prices" className="image">
          <img src={ga} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Разработка интернет-магазинов</h2>
            <p>
              Хотите продавать Ваши услуги или товары через интернет? 
              Мы поможем Вам в создании Вашего интернет-магазина под ключ. Мы берем на себя все, от дизайна до хостинга.
            </p>
            <a href="/Prices" className="special">
            Узнать подробнее
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/Prices" className="image">
          <img src={gif2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Поисковая оптимизация для Яндекс | Google - SEO</h2>
            <p>
            Поисковая оптимизация может улучшить Ваш сайт и сэкономить время при поиске Вашего сайта клиентами. 
            Мы поможем сделать Ваш сайт видимым в поисковых сетях Yandex и Google, таким образом, с помощью правильно настроенной поисковой оптимизации, 
            Вы сможете быстрее привлечь новых клиентов.
            </p>
            <a href="/Prices" className="special">
            Узнать подробнее
            </a>
          </div>
        </div>
      </section>
      <section id="four" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/Prices" className="image">
          <img src={domain} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Подбор уникального доменного имени | Хостинг Вашего сайта</h2>
            <p>
            Доменное имя, <code>напр.: <a href="https://www.sibsite-service.com">www.sibsite-service.com</a></code> - это Ваш уникальный идентификатор в мире IT. 
            Мы поможем подобрать и приобрести доменное имя, которое будет легко запоминаться Вашим клиентам и станет неотъемлемой частью Вашего бизнеса.
            А чтобы Ваш сайт заработал, мы разместим его на надежном облачном хостинге.
            </p>
            <a href="/Prices" className="special">
            Узнать подробнее
            </a>
          </div>
        </div>
      </section>
      <section id="five" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/Prices/" className="image">
          <img src={gif3} alt="google analytics logo white" />
          </a>
          <div className="content">
            <h2 className="major">Настройка Google Analytics на Вашем сайте</h2>
            <p>
            Google Analytics - это система Веб-Аналитики, которая позволяет Вам собирать и анализировать данные о пользователях Вашего сайта.
            Узнайте больше о посетителях Вашего сайта: как долго они находятся у Вас, сколько активных пользователей находится сейчас на Вашем сайте, и многое другое.
            </p>
            <a href="/Prices" className="special">
            Узнать подробнее
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Наши цены</h2>
          <p>
            Мы снизили цены на Аренду сайтов, теперь всего за 900 р./мес Вы можете арендовать свой сайт.
            <br />
            С пакетом "Всё включено" Вы получите Ваш новый сайт в течении двух недель 👩🏽‍💻 👨🏽‍💻 
            <br />
            Чтобы подробнее ознакомиться с нашими ценами нажмите на кнопку ниже.
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
