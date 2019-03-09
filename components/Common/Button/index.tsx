import * as React from 'react';

import { IBasicComponentProps } from '@app/components/Types';
import { Loading } from '../Loading';

import { concatClasses } from '@app/utils';

import styles from './styles';

interface IButtonProps extends IBasicComponentProps {
  isBusy?: boolean;
  icon?: React.ReactNode;
  type?: string;
  rounded?: boolean;
  size?: string;
  onClick?: (ev: any) => any;
  renderLoading?: (component: React.ReactNode) => React.ReactNode;
}

const getClassNames = ({ icon, className, type, rounded, size }) => {
  return concatClasses(
    `btn btn-${type}`,
    className,
    icon && 'with-icon',
    rounded && 'rounded',
    size && `btn-${size}`,
  );
};

const Button: React.SFC<IButtonProps> =
  ({ children, className, icon, isBusy, type, rounded, size, renderLoading, ...rest }) =>
  <button
    className={getClassNames({ icon, className, type, rounded, size })}
    {...rest}
    disabled={isBusy}>

    <style jsx>{styles}</style>
    {isBusy ?
      renderLoading
    :
      icon ?
      <>
        {icon}
        <span>{children}</span>
      </> :
      children
    }

  </button>;

Button.defaultProps = {
  type: 'default',
  rounded: false,
  size: 'base',
  renderLoading: () => <Loading />,
};

export { Button };
