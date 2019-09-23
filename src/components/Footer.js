import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Свяжитесь с нами</h2>
        <p>
          Чтобы оставить заявку, пожалуйста воспользуйтесь формой снизу. Мы свяжемся с Вами в ближайшее время. Либо свяжитесь с нами любым другим удобным для Вас способом.
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
            <fieldset id="selects">
              <label for="service">Какой услугой Вы хотите воспользоваться?</label>
                <select name="service" id="service" required="">
                  <option value="Choose" selected="" disabled=""></option>
                  <option value="Сайт-визитка">Создание Сайта-Визитки</option>
                  <option value="SEO">Поисковая оптимизация для Yandex | Google</option>
                  <option value="Интернет-магазин">Разработка интернет-магазина</option>
                  <option value="Другое">Другое</option>
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
          <li className="fa-phone">{config.phone}</li>

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
          <li>&copy; ООО "Сибсайт Сервис". Все права защищены.</li>
          <li>
            Дизайн: <a href="http://sibsite-service.ru">Сибсайт Сервис</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
