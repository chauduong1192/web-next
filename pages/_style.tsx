import css from 'styled-jsx/css';

const styles = css.global`
  @import 'nprogress/nprogress';

  @tailwind preflight;
  @tailwind components;

  body {
    @apply font-mono;
  }

`;

export default styles;
