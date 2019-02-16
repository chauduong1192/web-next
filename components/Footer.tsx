import React, { useState } from 'react';

import { withNamespaces } from '@app/i18nnext';

const Footer = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <footer>{props.t('description')}</footer>
    </div>
  );
};

export default withNamespaces('footer')(Footer);