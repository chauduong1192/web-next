import { Trans, withNamespaces } from '@app/i18nnext';
import React from 'react';

class Title extends React.Component {
  public render() { // eslint-disable-line class-methods-use-this
    return (
        <h1>
            <Trans i18nKey="h1" />
        </h1>
    );
  }
}

export default withNamespaces('common')(Title);
