import Link from 'next/link';
import css from 'styled-jsx/css';

import { connect } from 'react-redux';
import { testRedux } from '@app/redux/test/actions';
import { getTest } from '@app/redux/test/selectors';

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
