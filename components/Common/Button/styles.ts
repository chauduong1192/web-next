import css from 'styled-jsx/css';

const styles = css`
  button {
    @apply py-2 px-4 p-2 text-center outline-none;

    &[disabled], &.disabled {
      @apply cursor-not-allowed opacity-50;
    }

    &.with-icon {
      @apply inline-flex items-center;

      :global(svg) {
        @apply fill-current w-4 h-4 mr-2;
      }
    }

    &.rounded {
      @apply rounded;
    }
  }

  .btn-primary {
    @apply bg-blue text-white;

    &:hover {
      :not([disabled]){
        @apply bg-blue-dark;
      }
    }
  }

  .btn-base {
    @apply bg-grey-light text-grey-darkest;

    &:hover {
      :not([disabled]){
        @apply bg-grey;
      }
    }
  }

  .btn-outline {
    @apply bg-transparent text-blue-dark
    py-2 px-4 border border-blue rounded;

    &:hover {
      :not([disabled]){
        @apply bg-blue text-white border-transparent;
      }
    }
  }

  .btn-sm {
    @apply px-2 py-1;
  }

  .btn-xs {
    @apply p-0;
  }
`;

export default styles;
