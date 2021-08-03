import Link from 'next/link';

/**
 * Navbar item.
 */
export default function NavItem(props: {
  children: React.ReactNode;
  to: string;
  newTab?: boolean;
}) {
  const { children, to, newTab } = props;

  if (newTab) {
    return (
      <li
        css={{
          '&::before': {
            content: 'none',
          },
        }}
      >
        <a
          href={to}
          target="_blank"
          rel="noreferrer"
          css={{
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 500,
            color: 'white',
            marginLeft: 50,
            userSelect: 'none',
            transition: '250ms ease',
            '&:hover': {
              color: '#fafafa',
            },
          }}
        >
          {children}
        </a>
      </li>
    );
  }

  return (
    <li
      css={{
        '&::before': {
          content: 'none',
        },
      }}
    >
      <Link href={to}>
        <a
          href={to}
          css={{
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 500,
            color: 'white',
            marginLeft: 50,
            userSelect: 'none',
            transition: '250ms ease',
            '&:hover': {
              color: '#fafafa',
            },
          }}
        >
          {children}
        </a>
      </Link>
    </li>
  );
}
