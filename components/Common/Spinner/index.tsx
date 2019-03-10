import * as React from 'react';
import css from 'styled-jsx/css';

import { IBasicComponentProps } from '@app/components/Types';
import { concatClasses } from '@app/utils';

interface ISpinnerProps extends IBasicComponentProps {
  color?: string;
}

const styles = css`
  .spinner {
    @apply w-4 h-4 rounded-full inline-block;
    animation: sk-scaleout 1.0s infinite ease-in-out;

    &.base {
      @apply bg-grey-light;
    }

    &.primary {
      @apply bg-blue;
    }

    &.white {
       @apply bg-white;
    }
  }

  @keyframes sk-scaleout {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1.0);
      opacity: 0;
    }
  }

`;

const getClassNames = (props) => {
  return concatClasses(
    'spinner',
    props.color,
  );
};

const Spinner: React.SFC<ISpinnerProps> = props =>
  <div className={getClassNames(props)}>
    <style jsx>{styles}</style>
  </div>;

Spinner.defaultProps = {
  color: 'base',
};

export { Spinner };
