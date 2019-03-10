import css from 'styled-jsx/css';

const dropdownStyle = css`
  .dropdown {
    @apply relative inline-flex;
  }
`;

const dropdownTriggerStyle = css`
  :global([data-dd-dropdown-trigger]) {
    & :global(button) {
      &:after {
        @apply inline-block min-w-0 min-h-0 ml-1 align-middle;
        content: "";
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-left: 0.3em solid transparent;
      }
    }
  }
`;

const dropdownContentStyle = css`
  .content {
    @apply bg-white absolute pin-l pin-t shadow z-10 p-2 w-16;
  }
`;

export {
  dropdownStyle,
  dropdownTriggerStyle,
  dropdownContentStyle,
};
