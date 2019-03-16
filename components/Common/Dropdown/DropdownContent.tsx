import React, { useRef } from 'react';

import { IBasicComponentProps } from '@app/components/Types';
import { concatClasses } from '@app/utils';
import { IDropdownProps } from './index';

interface IDropdownContent extends IBasicComponentProps {
  direction?: IDropdownProps['direction'];
  triggerHeight?: number;
  triggerWidth?: number;
}

const getClassNames = props => concatClasses(
  'content',
  props.className,
  props.direction,
);

const getStyles = (props, dropdownContentRef) => {
  const { triggerHeight, triggerWidth } = props;
  switch (props.direction) {
    case 'top':
      return {
        // about this case we need to getting the height of dropdowncontent.
        // top: -dropdownContentRef.current.clientHeight,
        top: 0,
      };
    case 'right':
      return {
        left: triggerWidth,
      };
    case 'bottom':
      return {
        top: triggerHeight,
      };
    case 'left':
      return {
        left: -triggerWidth,
      };
  }
};

const DropdownContent: React.SFC<IDropdownContent> = (props) => {
  const dropdownContentRef = useRef(null);

  return (
    <div
      className={getClassNames(props)}
      style={getStyles(props, dropdownContentRef)}
      ref={dropdownContentRef}
    >
      {props.children}
    </div>
  );
};

DropdownContent.displayName = 'DropdownContent';

export { DropdownContent };
