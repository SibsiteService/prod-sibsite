import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './Footer';
import SideBar from './Sidebar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children, fullMenu } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Разработка и создание сайтов в Сибсайт Сервис - Чита, Иркутск, Улан-Удэ, Новосибирск, Владивосток и по всей России' },
                { name: 'yandex-verification', content:'42d2c6d546c40bcc'},
                { name: 'keywords', content: 'сибсайт сервис, sibsite-service.com, sibsite service, чита ру, создать сайт, интернет-магазин, разработка, под заказ, под ключ, веб дизайн, веб сайт, заказать сайт, создание интернет магазина, создание сайтов, создать сайт, лэндинг, сайт визитка, сайт для бизнеса, хостинг сайта' },
              ]}
            >
              <html lang="ru" />
              
            </Helmet>
            <div
              className={isPreloaded ? ' main-body  is-preload' : ' main-body'}
            >
              <div id="page-wrapper">
                <SideBar fullMenu={fullMenu} />
                {children}
                <Footer />
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
