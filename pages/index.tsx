import React from 'react';
import css from 'styled-jsx/css';

import { i18n, Link, withNamespaces } from '@app/i18nnext';

import Footer from '@app/components/Footer';
import Title from '@app/components/Title';
import Nav from '@app/components/Nav';

const styles = css`
  button {
    @apply bg-blue text-white font-bold py-2 px-4 rounded;
  }
`;

class Homepage extends React.Component {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'footer'],
    };
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
      </>
    );
  }
}

export default withNamespaces('common')(Homepage);
