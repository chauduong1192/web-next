import React from 'react';
import Link from 'next/link';

const links = [
  { href: '', label: 'Github', key: '' },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
);

export default Nav;
