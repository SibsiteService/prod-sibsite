import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Свяжитесь с нами</h2>
        <p>
          Чтобы оставить заявку, пожалуйста воспользуйтесь формой снизу. Мы свяжемся с Вами в ближайшее время. Либо воспользуйтесь любым другим удобным для Вас способом.
        </p>
        <form action="https://formcarry.com/s/16cIN7iss6i" method="post">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Ваше Имя</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Адрес электронной почты</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
            <fieldset id="select-service">
              <label for="service">Какой услугой Вы хотите воспользоваться?</label>
                <select name="service" id="service" required="">
                  <option value="-" selected="-" disabled="-">-</option>
                  <option value="Сайт-визитка">Создание Сайта-Визитки</option>
                  <option value="Интернет-магазин">Разработка Интернет-Магазина</option>
                  <option value="SEO">Поисковая оптимизация для Yandex | Google</option>
                </select>
            </fieldset>
            </div>
            <div className="field">
            <fieldset id="select-budget">
              <label for="service">Какой у Вас бюджет?</label>
                <select name="service" id="service" required="">
                  <option value="-" selected="-" disabled="-">-</option>
                  <option value="10000 RUB">до 10 000 ₽</option>
                  <option value="20000 RUB">до 20 000 ₽</option>
                  <option value="More 20000 RUB">более 20 000 ₽</option>
                </select>
            </fieldset>
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
          <li className="fa-whatsapp">{config.whatsapp}</li>
          <li className="fa-mobile">{config.phone}</li>

          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
        </ul>
        <ul className="copyright">
          <li>
            Дизайн: <a href="https://sibsite-service.ru">Сибсайт Сервис</a>
          </li>
          <li>&copy; ООО "Сибсайт Сервис". Все права защищены.</li>
          <li><a href="https://drive.google.com/open?id=1_LfBzsTPTm-PwGOWsXOVGAa3eXhdMwNf" target="_blank">Свидетельство о постановке на учёт</a></li>
          <li><a href="https://drive.google.com/open?id=1lUcv9iZQ4j4p8wYIJ32Grv05xApcQx8S" target="_blank">Свидетельство о регистрации</a></li> 
          <li><a href="https://drive.google.com/open?id=1lZefAeoXUGaNrtTIsC_UXyDiPbyeGC4n" target="_blank">Устав</a></li> 
        </ul>
      </div>
    </section>
  );
}
