import React from 'react';
import Link from 'next/link';
import Head from '@components/Head';

const Home = () => (
  <div>
    <Head title="Home" />
    <div className="hero">
      <h1 className="title">Welcome to web next</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
      <div className="row">
        <Link href="/components">
          <a className="card">
            <h3>Components &rarr;</h3>
            <p>How to use components in this sources</p>
          </a>
        </Link>
        <Link href="/todos">
          <a className="card">
            <h3>Demo fetch todo list &rarr;</h3>
            <p>How to use redux thunk in this sources</p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 1200px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Home;
