import * as React from 'react';

import { IBasicComponentProps } from '@components/Types';
import { concatClasses } from '@utils';

interface IAlertProps extends IBasicComponentProps {
  color?: string;
  solid?: boolean;
}

const getClassNames = ({ className, color, solid }) => {
  return concatClasses(
    className,
    color,
    solid && 'solid',
  );
};

const Alert: React.SFC<IAlertProps> = ({ children, className, color, solid }) =>
  <div className={getClassNames({ className, color, solid })} role="alert">
    { children }
  </div>;

Alert.defaultProps = {
  color: 'primary',
};

export { Alert };
