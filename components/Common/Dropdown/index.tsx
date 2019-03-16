import * as React from 'react';

import { IBasicComponentProps } from '@app/components/Types';

import { concatClasses } from '@app/utils';

import { getAncestorByDataAttr } from '@app/utils/dom/attrs-selectors';

import { DropdownTrigger } from './DropdownTrigger';
import { DropdownContent } from './DropdownContent';

export interface IDropdownProps extends IBasicComponentProps {
  disabled?: boolean;
  direction?: 'top' | 'right' | 'bottom' | 'left';
  isOpen?: boolean;
  initialIsOpen?: boolean;
}

interface IDropdownStates {
  isOpen: boolean;
}

const getClassNames = ({ className }: any, { isOpen }) => concatClasses(
  'dropdown',
  className,
  isOpen && 'is-open',
);

class Dropdown extends React.PureComponent<IDropdownProps, IDropdownStates> {

  public static defaultProps = {
    triggerButtonDomProps: {},
    direction: 'bottom',
    isOpen: false,
  };

  public static DropdownTrigger = DropdownTrigger;
  public static DropdownContent = DropdownContent;

  public state = {
    isOpen: this.props.isOpen,
  };

  public isTouched = null;
  public dropdownTriggerRef = null;

  public componentDidMount() {
    if (this.props.isOpen) {
      this.handleListenEventClick();
    }
  }

  public componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      this.setState({
        isOpen: nextProps.isOpen,
      }, () => {
        if (nextProps.isOpen) {
          this.handleListenEventClick();
        }
      });
    }
  }

  public setTriggerRef = (el) => {
    if (el) {
      this.dropdownTriggerRef = el;
    }
  }

  public handleClick = (ev) => {
    if (this.isTouched) {
      return;
    }
    this.handleTriggerButtonPressed(ev);
  }

  public handleTouchStart = (ev) => {
    this.isTouched = true;
    this.handleTriggerButtonPressed(ev);
  }

  public handleTriggerButtonPressed = (ev?) => {

    if (ev) ev.persist();

    this.setState({
      isOpen: !this.state.isOpen,
    }, () => {
      if (this.state.isOpen) {
        this.handleListenEventClick();
      } else {
        this.handleRemoveEventClick();
      }
    });
  }

  public windowClickHandler = (ev) => {
    if (getAncestorByDataAttr(ev.target, 'dd-dropdown-trigger') !== this.dropdownTriggerRef) {
      this.handleRemoveEventClick();
      this.handleTriggerButtonPressed();
    }

  }

  public handleListenEventClick = () => {
    window.addEventListener('click', this.windowClickHandler);
  }

  public handleRemoveEventClick = () => {
    window.removeEventListener('click', this.windowClickHandler);
    window.removeEventListener('touchstart', this.windowClickHandler);
  }

  public renderChild = (child) => {
    const { displayName } = child.type;

    if (displayName === 'DropdownTrigger') {
      return (
        <div data-dd-dropdown-trigger ref={this.setTriggerRef}>
          {
            React.cloneElement(
              child,
              {
                onClick: this.handleClick,
                onTouchStart: this.handleTouchStart,
              },
            )
          }
        </div>
      );

    }

    if (displayName === 'DropdownContent') {
      if (!this.state.isOpen) {
        return null;
      }
      return React.cloneElement(
        child,
        {
          direction: this.props.direction,
          triggerWidth: this.dropdownTriggerRef.clientWidth,
          triggerHeight: this.dropdownTriggerRef.clientHeight,
        });
    }
  }

  public render() {
    return(
      <div className={getClassNames(this.props, this.state)}>

        {React.Children.map(this.props.children, this.renderChild)}

      </div>
    );
  }
}

export { Dropdown };
