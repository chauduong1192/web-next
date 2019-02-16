import React from 'react';

import { i18n, Link, withNamespaces } from '@app/i18nnext';

import Footer from '@app/components/Footer';
import Title from '@app/components/Title';
import Nav from '@app/components/Nav';

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
        <Nav />
        <Title />
        <button
          type="button"
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
