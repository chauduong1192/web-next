import css from 'styled-jsx/css';

const styles = css`
  div {
    @apply px-4 py-3 rounded relative;

    &.primary {
      @apply bg-blue-lightest text-blue-dark;
      &.solid {
        @apply bg-blue;
      }

    }

    &.danger {
      @apply bg-red-lightest text-red-dark;
      &.solid {
        @apply bg-red;
      }
    }

    &.warning {
      @apply bg-orange-lightest text-orange-dark;
      &.solid {
        @apply bg-orange;
      }
    }

    &.solid {
      @apply font-bold flex items-center text-white text-sm font-bold;
    }
  }
`;

export default styles;
