import * as React from 'react';

import { IBasicComponentProps } from '@app/components/Types';

const ButtonGroup: React.SFC<IBasicComponentProps> = ({ className, children }) =>
  <div className={className}>
    {children}
  </div>;

export { ButtonGroup };
