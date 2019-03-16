import React, { useState } from 'react';
import Link from 'next/link';

import { connect } from 'react-redux';
import { testRedux } from '@app/redux/test/actions';
import { getTest } from '@app/redux/test/selectors';

import { Button, Alert, Dropdown, Spinner } from '@app/components/Common';

const { DropdownTrigger, DropdownContent } = Dropdown;

const Nav = (props) => {
  const [state, setState] = useState({
    isBusy: false,
    count: 0,
  });
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link prefetch href="/">
              <a onClick={() => props.testRedux(Math.random())}>test redux</a>
            </Link>
          </li>
          <li>
            {props.test}
          </li>
        </ul>
        <Button
          color="primary"
          rounded
          onClick={() =>
            setState({
              isBusy: true,
              count: state.count + 1,
            })}
          isBusy={state.isBusy}
        >
          {state.count} count
          </Button>

        <Alert color="primary" solid>
            <strong>Waring! </strong>
          <span>Something seriously bad happened.</span>
        </Alert>

        <Dropdown>
          <DropdownTrigger color="primary">
            bottom
          </DropdownTrigger>
          <DropdownContent>
            <div>
              <Link href="/about">
                <a>test redux</a>
              </Link>
             <div>2222</div>
             <div>3333</div>
             <div>4444</div>
             <div>5555</div>
            </div>
          </DropdownContent>
        </Dropdown>
        <br />
        <Dropdown direction="top">
          <DropdownTrigger color="primary">
            top
          </DropdownTrigger>
          <DropdownContent>
            <div>
              <Link href="/about">
                <a>test redux</a>
              </Link>
             <div>2222</div>
             <div>3333</div>
             <div>4444</div>
             <div>5555</div>
            </div>
          </DropdownContent>
        </Dropdown>
        <br />
        <Dropdown direction="left">
          <DropdownTrigger color="primary">
           left
          </DropdownTrigger>
          <DropdownContent>
            <div>
              <Link href="/about">
                <a>test redux</a>
              </Link>
             <div>2222</div>
             <div>3333</div>
             <div>4444</div>
             <div>5555</div>
            </div>
          </DropdownContent>
        </Dropdown>
        <br/>
        <Dropdown direction="right">
          <DropdownTrigger color="primary">
            right
          </DropdownTrigger>
          <DropdownContent>
            <div>
              <Link href="/about">
                <a>test redux</a>
              </Link>
              <div>2222</div>
              <div>3333</div>
              <div>4444</div>
              <div>5555</div>
            </div>
          </DropdownContent>
        </Dropdown>
        <Spinner />
      </nav>
    </>
  );
};

const mapStateToProps = state => ({
  test: getTest(state),
});

const mapDispatchToProps = {
  testRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
