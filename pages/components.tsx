import React from 'react';
import css from 'styled-jsx/css';
import Link from 'next/link';

import { Button } from '@components/Common';

const style = css`
  .content {
    padding: 2rem;
  }
  .content .wrap {
     display: flex;
    justify-content: space-around;
  }
  .content .component {
    font-weight: bold;
    color: black;
    flex-direction: column;
    display: flex;
  }
  :global(.primary),
  :global(.btn-primary) {
    background-color: blue;
    color: white;
  }
  :global(.warning) {
    background-color: yellow;
    color: black;
  }
`;

const Component = () => (
  <div className="content">
    <style jsx>{style}</style>
    <Link href="/"><a>Back</a></Link>
    <div className="wrap">
      <div className="component">
        Button
        <Button
          color="primary"
          rounded
        >
        Primary
        </Button>
      </div>
    </div>
  </div>
);

Component.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Component;
