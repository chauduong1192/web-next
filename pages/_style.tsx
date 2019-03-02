import css from 'styled-jsx/css';

const styles = css.global`
  @tailwind preflight;
  @tailwind components;

  @import "nprogress/nprogress";

  body {
    @apply font-mono;
  }
`;

export default styles;
