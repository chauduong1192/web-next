import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Button } from '@components/Common';

const Content = styled.div`
  .content {
    padding: 2rem;
  }
  .wrap {
     display: flex;
    justify-content: space-around;
  }
  .component {
    font-weight: bold;
    color: black;
    flex-direction: column;
    display: flex;
  }

  & .primary,
  & .btn-primary {
    background-color: blue;
    color: white;
  }

  & .warning {
    background-color: yellow;
    color: black;
  }
`;

const Component = () => (
  <Content className="content">
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
  </Content>
);

Component.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Component;
