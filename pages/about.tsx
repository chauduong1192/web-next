import React from 'react';

import { Link, withNamespaces } from '@app/i18nnext';

class About extends React.Component<any, any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['about'],
    };
  }

  public render() {
    const { t } = this.props;
    return (
        <>
            <h1>{t('h1')}</h1>
            <Link href="/">
                <button
                    type="button"
                >
                    {t('back-to-home')}
                </button>
            </Link>
        </>
    );
  }
}

export default withNamespaces('about')(About);
