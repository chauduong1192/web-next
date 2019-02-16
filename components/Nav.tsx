import Link from 'next/link';
import css from 'styled-jsx/css';

const links = [
  { href: 'https://github.com/zeit/next.js', label: 'Github' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
];

const styles = css`
  ul {
    @apply flex justify-between items-center p-8;
  }
  li {
    @apply list-reset;
  }
  a {
    @apply text-blue no-underline font-bold py-2 px-4
    rounded bg-blue text-white;
    :hover {
      @apply bg-blue-dark;
    }
  }
`;

const Nav = () => {
  return (
    <>
      <style jsx>{styles}</style>
      <nav>
        <ul>
          <li>
            <Link prefetch href="/">
              <a>Home</a>
            </Link>
          </li>
          <ul>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
