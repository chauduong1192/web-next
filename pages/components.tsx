import React from 'react';
import css from 'styled-jsx/css';
import Link from 'next/link';

import { Button, Alert, Dropdown } from '@components/Common';
const { DropdownTrigger, DropdownContent } = Dropdown;

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

const Home = () => (
  <div className="content">
    <style jsx>{style}</style>
    <Link href="/"><a>Back</a></Link>
    <div className="wrap">
      <div className="component">
        DropDown
        <Dropdown>
          <DropdownTrigger color="primary">
            For bottom
              </DropdownTrigger>
          <DropdownContent>
            <div>
              <Link href="/about">
                <a>test 1</a>
              </Link>
              <div>2222</div>
              <div>3333</div>
              <div>4444</div>
              <div>5555</div>
            </div>
          </DropdownContent>
        </Dropdown>
      </div>
      <div className="component">
        Alert
        <Alert color="warning" solid>
          <strong>Waring! </strong>
          <span>Something seriously bad happened.</span>
        </Alert>
        <Alert color="primary" solid>
          <strong>Opps! </strong>
          <span>Hi</span>
        </Alert>
      </div>
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

export default Home;
