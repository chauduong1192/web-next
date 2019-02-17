import css from 'styled-jsx/css';

const styles = css.global`
  @tailwind preflight;
  @tailwind components;

  body {
    @apply font-sans;
  }
`;

export default styles;
