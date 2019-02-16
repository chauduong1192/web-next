import { Trans, withNamespaces } from '@app/i18nnext';
import React from 'react';

import css from 'styled-jsx/css';

const styles = css`
  h1 {
    @apply text-red;
  }
`;

class Title extends React.Component {
  public render() { // eslint-disable-line class-methods-use-this
    return (
      <>
        <style jsx>{styles}</style>
        <h1>
            <Trans i18nKey="h1" />
        </h1>
      </>
    );
  }
}

export default withNamespaces('common')(Title);
