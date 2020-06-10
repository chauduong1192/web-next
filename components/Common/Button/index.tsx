import * as React from 'react';

import { IBasicComponentProps } from 'components/Types';

import { concatClasses } from 'utils';

export interface IButtonProps extends IBasicComponentProps {
  isBusy?: boolean;
  icon?: React.ReactNode;
  color?: string;
  rounded?: boolean;
  size?: string;
  onClick?: (ev: any) => any;
  renderLoading?: (component: React.ReactNode) => React.ReactNode;
}

const getClassNames = ({ icon, className, color, rounded, size }) => {
  return concatClasses(
    `btn-${color}`,
    className,
    icon && 'with-icon',
    rounded && 'rounded',
    size && `btn-${size}`,
  );
};

const Button =
  ({ children, className, icon, isBusy, color, rounded, size, renderLoading, ...rest }: IButtonProps) =>
  <button
    className={getClassNames({ icon, className, color, rounded, size })}
    {...rest}
    disabled={isBusy}>

    {isBusy ?
        <><span>Loading ...</span></>
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
  color: 'base',
  rounded: false,
};

export { Button };
