import Link from 'next/link';

/**
 * Navbar item.
 */
export default function NavItem(props: {
  className?: string;
  children: React.ReactNode;
  to: string;
  activeRoute?: string;
  newTab?: boolean;
}) {
  const { children, to, activeRoute, newTab } = props;
  const opacity = to === activeRoute ? 1 : 0.75;

  if (newTab) {
    return (
      <li
        className={props.className}
        css={{
          margin: 0,
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
            opacity,
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
      className={props.className}
      css={{
        margin: 0,
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
            opacity,
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
