import * as React from 'react';

import { IBasicComponentProps } from '@app/components/Types';

import styles from './styles';

const ButtonGroup: React.SFC<IBasicComponentProps> = ({ className, children }) =>
  <div className={className}>
    <style jsx>{styles}</style>
    {children}
  </div>;

export { ButtonGroup };
