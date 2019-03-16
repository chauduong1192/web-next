import * as React from 'react';

import { IBasicComponentProps } from '@app/components/Types';
import { concatClasses } from '@app/utils';

interface ISpinnerProps extends IBasicComponentProps {
  color?: string;
}

const getClassNames = (props) => {
  return concatClasses(
    'spinner',
    props.color,
  );
};

const Spinner: React.SFC<ISpinnerProps> = props =>
  <div className={getClassNames(props)}>
  </div>;

Spinner.defaultProps = {
  color: 'base',
};

export { Spinner };
