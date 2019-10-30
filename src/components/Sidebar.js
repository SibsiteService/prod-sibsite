import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
import config from '../../config';
export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <>
      <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
        <h1>
          <Link to="/">Сибсайт Сервис</Link>
          &nbsp;|&nbsp;
          <Link to="/Contact">Контакты</Link>
          &nbsp;|&nbsp;
          <Link to="/Prices">Цены</Link>
        </h1>

        <nav>
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              toggleHeader(!headerOpen);
            }}
            className="menuToggle"
          >
            <span>Подробнее</span>
          </a>
        </nav>
      </header>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </>
  );
}
