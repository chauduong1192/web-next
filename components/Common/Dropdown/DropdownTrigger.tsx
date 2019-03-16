import * as React from 'react';

import { IBasicComponentProps } from '@app/components/Types';
import { Button, IButtonProps } from '../Button';

interface IDropdownTriggerProps extends IButtonProps, IBasicComponentProps {}

const DropdownTrigger: React.SFC<IDropdownTriggerProps> = (props) => {
  return (
    <Button
      {...props}
    >
      {props.children}
    </Button>
  );
};

DropdownTrigger.displayName = 'DropdownTrigger';

export { DropdownTrigger };
