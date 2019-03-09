import React, { useState } from 'react';
import Link from 'next/link';
import css from 'styled-jsx/css';

import { connect } from 'react-redux';
import { testRedux } from '@app/redux/test/actions';
import { getTest } from '@app/redux/test/selectors';

import { Button, ButtonGroup } from '@app/components/Common';

const styles = css`
  ul {
    @apply flex justify-between items-center p-8;
  }
  li {
    @apply list-reset;
  }
  a {
    @apply text-blue no-underline font-bold py-2 px-4
    rounded bg-blue text-white;
    :hover {
      @apply bg-blue-dark;
    }
  }
`;

const Nav = (props) => {
  const [state, setState] = useState({
    isBusy: false,
    count: 0,
  });
  return (
    <>
      <style jsx>{styles}</style>
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
        <ButtonGroup>
          <Button
            rounded
            onClick={() =>
            setState({
              isBusy: true,
              count: state.count + 1,
            })}
          >
            {state.count} count
          </Button>
          <Button
            rounded
            onClick={() =>
            setState({
              isBusy: true,
              count: state.count + 1,
            })}
          >
            {state.count} count
          </Button>
        </ButtonGroup>
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
