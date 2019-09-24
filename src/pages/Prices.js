import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/pic08.jpg';
const IndexPage = () => <Layout fullMenu>
<section id="wrapper">
		<header>
			<div className="inner">
				<h2>Наши цены</h2>
				<p>Подберите пакет услуг, который подходит именно Вам.</p>
			</div>
		</header>

			<div className="wrapper">
				<div className="inner">
	
					<section>
						<h3 className="major">Цены</h3>
            <h4>Сайт-Визитка</h4>
						<div className="table-wrapper">
							<table>
								<thead>
									<tr>
										<th>Название</th>
										<th>Описание</th>
										<th>Цена</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Сайт за 9 900 ₽</td>
										<td>
                      <li><span>Выбор дизайна из предложенных шаблонов</span></li>
                      <li><span>Адаптивная версия сайта</span></li>
                      <li><span>Написание текстов, подбор изображений</span></li>
                      <li><span>Хостинг сайта и регистрация доменного имени</span></li>
                    </td>
										<td>9 900 ₽ + 300 ₽/месяц <sub>хостинг</sub></td>
									</tr>
									<tr>
										<td>Сайт за 17 900 ₽</td>
										<td>
                      <li><span>Разработка индивидуального дизайна сайта.</span></li>
                      <li><span>Адаптивная версия сайта</span></li>
                      <li><span>Написание текстов, подбор изображений</span></li>
                      <li><span>Хостинг сайта и регистрация доменного имени</span></li>
                      <li><span>Дизайн логотипа в подарок</span></li>
                    </td>
										<td>17 900 ₽ + 400 ₽/месяц <sub>хостинг</sub></td>
									</tr>
                  <tr>
										<td>Сайт от 25 900 ₽</td>
										<td>
                      <li><span>Согласование главной страницы</span></li>
                      <li><span>Корректно открывается во всех браузерах и на всех устройствах</span></li>
                      <li><span>Согласование стадий разработки сайта</span></li>
                      <li><span>Разработка индивидуального дизайна сайта.</span></li>
                      <li><span>Адаптивная версия сайта</span></li>
                      <li><span>Написание текстов, подбор изображений</span></li>
                      <li><span>Хостинг сайта и регистрация доменного имени</span></li>
                      <li><span>Дизайн логотипа в подарок</span></li>
                      <li><span>Неограниченное количество страниц</span></li>
                    </td>
										<td>от 25 900 ₽ + 500 ₽/месяц <sub>хостинг</sub></td>
									</tr>
								</tbody>
								
							</table>
						</div>
		
					</section>

					

				</div>
			</div>

	</section>

</Layout>;

export default IndexPage;
