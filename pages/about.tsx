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
            <h1 className="abc">{t('h1')}</h1>
            <style jsx>{`
                .abc {
                    font: 15px Helvetica, Arial, sans-serif;
                    background: #eee;
                    padding: 100px;
                    text-align: center;
                    transition: 100ms ease-in background;
                    lost-column: 1/3;
                    &:hover {
                    color: red;
                    }
                }
            `}</style>
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
