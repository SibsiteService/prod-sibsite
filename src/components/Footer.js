import React from 'react';
import config from '../../config';
import doc1 from '../assets/docs/doc1.pdf';
import doc2 from '../assets/docs/doc2.pdf';
import doc3 from '../assets/docs/doc3.pdf';

export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Свяжитесь с нами</h2>
        <p>
          Чтобы оставить заявку, кратко сфомируйте свою идею и воспользуйтесь формой снизу. Мы свяжемся с Вами в ближайшее время.
        </p>
        <form action="https://formcarry.com/s/16cIN7iss6i" method="post">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Ваше Имя</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
            <fieldset id="select">
              <label htmlFor="service">Какой услугой Вы хотите воспользоваться?</label>
                <select name="service" id="service" required="">
                  <option value="">-</option>
                  <option value="Сайт-визитка">Создание Сайта-Визитки</option>
                  <option value="Интернет-магазин">Разработка Интернет-Магазина</option>
                  <option value="SEO">Поисковая оптимизация для Yandex | Google</option>
                  <option value="Hosting">Хостинг Сайта</option>
                </select>
            </fieldset>
            </div>
            <div className="field">
            <fieldset id="select-budget">
              <label htmlFor="service">Какой у Вас бюджет?</label>
                <select name="service" id="service" required="">
                  <option value="">-</option>
                  <option value="Бюджет: до 10 т.р.">до 10 000 ₽</option>
                  <option value="Бюджет: до 20 т.р.">до 20 000 ₽</option>
                  <option value="Бюджет: больше 20 т.р.">более 20 000 ₽</option>
                </select>
            </fieldset>
            </div>
            <div className="field">
              <label htmlFor="email">Адрес электронной почты</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="tel">Номер Телефона</label>
              <input type="tel" name="tel" id="tel" />
            </div>
            <div className="field">
              <label htmlFor="message">Описание</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Отправить заявку" />
            </li>
          </ul>
        </form>
        <ul className="contact">
                   
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
          
          <li className="fa-mobile"><a href="tel:+79965150521">Viber: {config.viber}</a></li>
          <li className="fa-whatsapp"><a href="https://wa.me/79149078408?text=Я%20бы%20хотел%20заказать%20сайт">Whatsapp: {config.whatsapp}</a></li>
          <li className="fa-mobile"><a href={"tel:"+config.phone.replace('-','')}>Телефон: {config.phone}</a></li>
          <li className="fa-home">{config.address}</li>
        </ul>
        <ul className="copyright">
          <li>
            Дизайн: <a href="https://sibsite-service.com">Сибсайт Сервис</a>
          </li>
          <li>&copy; ООО "Сибсайт Сервис". Все права защищены.</li>
          <li><a href={doc1} target="_blank" alt="Свидетельство о постановке на учёт" target="_blank">Свидетельство о постановке на учёт</a></li>
          <li><a href={doc2} target="_blank" alt="Свидетельство о регистрации" target="_blank">Свидетельство о регистрации</a></li> 
          <li><a href={doc3} target="_blank" alt="Устав" target="_blank">Устав</a></li> 
        </ul>
      </div>
    </section>
  );
}
