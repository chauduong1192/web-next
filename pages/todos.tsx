import React from 'react';
import Link from 'next/link';

import Todo from '@components/Todo';

const Todos = () => (
  <div className="content">
    <Link href="/"><a>Back</a></Link>
    <div className="wrap">
      <Todo />
    </div>
  </div>
);

Todos.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Todos;
