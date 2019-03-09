import * as React from 'react';

import { IBasicComponentProps } from '@app/components/Types';

const Loading: React.SFC<IBasicComponentProps> =
  ({ children, className }) =>
  <div
    className={className}>
    LOADING ...
  </div>;

export { Loading };
