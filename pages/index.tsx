import React from 'react';
import css from 'styled-jsx/css';

import { i18n, Link, withNamespaces } from '@app/i18nnext';

import Footer from '@app/components/Footer';
import Title from '@app/components/Title';
import Nav from '@app/components/Nav';

import * as fetch from 'isomorphic-fetch';

const styles = css`
  button {
    @apply bg-blue text-white font-bold py-2 px-4 rounded mr-4;
  }

  .loading {
    @apply mt-4;
  }
`;

class Homepage extends React.PureComponent<any, any> {
  public static async getInitialProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const lists = await res.json();

    return {
      lists,
      namespacesRequired: ['common', 'footer'],
    };
  }
  public state = {
    isLoading: false,
  };

  public componentDidMount() {
    if (this.props.lists.length > 0) {
      this.setState({
        isLoading: true,
      });
    }
  }

  public render() {
    const { t } = this.props;
    return (
      <>
        <style jsx>{styles}</style>
        <Nav />
        <Title />
        <button
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'vn' : 'en')}
        >
          {t('change-locale')}
        </button>
        <Link href="/about">
          <button
            type="button"
          >
            {t('about')}
          </button>
        </Link>
        <Footer />
        { this.state.isLoading
          ?
            this.props.lists.map(item => <div className="loading" key={item.id}>{item.title}</div>)
          :
            <div className="loading">....Loading to fetching data </div>
        }
      </>
    );
  }
}

export default withNamespaces('common')(Homepage);
