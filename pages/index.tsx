import React from 'react';

import { withNamespaces } from '@app/i18nnext';

import Nav from '@app/components/Nav';

import * as fetch from 'isomorphic-fetch';

class Homepage extends React.PureComponent<any, any> {
  public static async getInitialProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const lists = await res.json();

    return {
      lists,
      namespacesRequired: ['common', 'footer'],
    };
  }

  public render() {
    return (
      <>
        <Nav />
      </>
    );
  }
}

export default withNamespaces('common')(Homepage);
