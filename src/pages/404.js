import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Страница не найдена</h2>
          <p>Данная страница не существует</p>
        </div>
      </header>
    </section>
  </Layout>
);

export default IndexPage;
