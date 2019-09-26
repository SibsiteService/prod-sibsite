import React from 'react';
import aws from '../assets/images/aws_logo.png';
import Layout from '../components/Layout';

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
			
			<section id="сайт-визитка">
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
										<td>9 900 ₽<br></br>+ 500 ₽/месяц за хостинг</td>
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
										<td>17 900 ₽<br></br>+ 500 ₽/месяц за хостинг</td>
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
										<td>от 25 900 &#8381;<br></br>+ 500 ₽/месяц за хостинг</td>
									</tr>
								</tbody>
								
							</table>
						</div>
		
					</section>

					<section id="hosting">
					<h3 className="major">Цены</h3>
            		<h4>Хостинг</h4>
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
										<td>Хостинг за 600 ₽/месяц</td>
										<td>
                      					<li><span>Хостинг на облачном сервисе &nbsp;
												<a href="https://aws.amazon.com" rel="noopener noreferrer" target="_blank"> 
											  		<img src={aws} alt="aws logo" width="24" height="12.6"/> 
												</a>
											</span>
										</li>
                      					<li><span>Полная поддержка при развертывании Вашего сайта на хостинг</span></li>
                      					<li><span>Настройка саб-доменов</span></li>
                      					<li><span>Доступность облачного сервиса 24/7 365 дней в году</span></li>
                    					</td>
										<td>600 ₽/месяц</td>
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
