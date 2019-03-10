import * as React from 'react';

import { IBasicComponentProps } from '@app/components/Types';
import { Button, IButtonProps } from '../Button';

import { dropdownTriggerStyle as styles } from './styles';

interface IDropdownTriggerProps extends IButtonProps, IBasicComponentProps {}

const DropdownTrigger: React.SFC<IDropdownTriggerProps> = (props) => {
  return (
    <Button
      {...props}
    >
      <style jsx>{styles}</style>
      {props.children}
    </Button>
  );
};

DropdownTrigger.displayName = 'DropdownTrigger';

export { DropdownTrigger };
