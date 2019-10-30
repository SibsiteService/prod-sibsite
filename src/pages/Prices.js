import React from 'react';
import aws from '../assets/images/aws_logo.png';
import Layout from '../components/Layout';

const IndexPage = () => <Layout fullMenu>
<section id="wrapper">
		<header>
			<div className="inner">
				<h2>Наши цены</h2>
				<p>	При заказе до 1 января 2020 - дизайн логотипа в подарок для всех сайтов!
					<br />
					А так же мы снизили цены на аренду сайтов, теперь за 600 ₽/месяц!  
				</p>
			</div>
		</header>

			<div className="wrapper">
				<div className="inner">
			
			<section id="Сайт в аренду">
					<h3 className="major">Сайт в аренду</h3>
            		
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
										<td>Сайт в Аренду 600 ₽/месяц <br /> вместо <s>900 ₽/месяц</s> </td>
										<td>
										<li><span>Выбор сайта из предложенных шаблонов</span></li>
										<li><span>Заполнение сайта Вашими текстами и информацией</span></li>
										  <li><span>Хостинг на облачном сервисе &nbsp;
												<a href="https://aws.amazon.com" rel="noopener noreferrer" target="_blank"> 
											  		<img src={aws} alt="aws logo" width="24" height="12.6"/> 
												</a>
											</span>
										</li>
                      					<li><span>Доступность сайта 24/7</span></li>
                    					</td>
										<td>600 ₽/месяц</td>
									</tr>
								</tbody>
								
							</table>
						</div>
		
				</section>

			<section id="Продвижение сайта в поиске">
				<h3 className="major">Продвижение сайта в поиске</h3>
				
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
									<td>Настройка SEO для Вашего сайта</td>
									<td>
									<li><span>Ваша компания начнет появляться в поиске Яндекс и Google</span></li>
									<li><span>Настройка региональности сайта</span></li>
									<li><span>Установка и настройка систем аналитики (Яндекс.Метрика)</span></li>
									<li><span>Настройка robots.txt</span></li>
									<li><span>Прописывание/оптимизация заголовков h1</span></li>
									<li><span>Прописывание/оптимизация заголовков title</span></li>
									</td>
									<td>4 900 ₽</td>
								</tr>
							</tbody>
							
						</table>
					</div>
	
			</section>

			<section id="Создание сайта">
			<h3 className="major">Создание Сайта</h3>
            
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
										<td>Сайт за 5 900 ₽</td>
										<td>
                      <li><span>Выбор дизайна из предложенных шаблонов</span></li>
                      <li><span>Адаптивная версия сайта</span></li>
                      <li><span>Написание текстов, подбор изображений</span></li>
                      <li><span>Хостинг сайта и регистрация доменного имени</span></li>
                    </td>
										<td>5 900 ₽<br></br>+ 300 ₽/месяц за хостинг</td>
									</tr>
									<tr>
										<td>Сайт за 13 900 ₽</td>
										<td>
                      <li><span>Разработка индивидуального дизайна сайта.</span></li>
                      <li><span>Адаптивная версия сайта</span></li>
                      <li><span>Написание текстов, подбор изображений</span></li>
                      <li><span>Хостинг сайта и регистрация доменного имени</span></li>
                      <li><span>Дизайн логотипа в подарок</span></li>
                    </td>
										<td>13 900 ₽<br></br>+ 300 ₽/месяц за хостинг</td>
									</tr>
                  <tr>
										<td>Сайт за 19 900 ₽</td>
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
										<td>19 900 &#8381;<br></br>+ 300 ₽/месяц за хостинг</td>
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
