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
          <a href="/Prices" className="image">
            <img src={gif1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Создание сайтов-визиток</h2>
            <p>
              Чтобы   
            </p>
            <a href="/Prices" className="special">
            Заказать разработку сайта
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/Prices" className="image">
            <img src={gif2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Поисковая оптимизация для Yandex | Google - SEO</h2>
            <p>
            Поисковая оптимизация может улучшить Ваш сайт и сэкономить время при поиске Вашего сайта клиентами. 
            Мы поможем сделать Ваш сайт видимым в поисковых сетях Yandex и Google, таким образом, с помощью правильно настроенной поисковой оптимизации, 
            Вы сможете быстрее привлечь новых клиентов.
            </p>
            <a href="/Prices" className="special">
            Заказать услугу
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/Prices" className="image">
            <img src={gif3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Разработка интернет-магазинов</h2>
            <p>
              Хотите продавать Ваши услуги или товары через интернет? 
              Мы поможем Вам в создании Вашего интернет-магазина под ключ. Мы берем на себя все, от дизайна до хостинга.
            </p>
            <a href="/#" className="special">
            Заказать разработку интернет-магазина
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Vitae phasellus</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <section className="features">
            <article>
              <a href="/Prices" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
