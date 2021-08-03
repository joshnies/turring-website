import { useState } from 'react';
import Link from 'next/link';
import { useMediaQuery, useTheme } from '@geist-ui/react';

import HamburgerButton from './hamburger-button';
import NavItem from './nav-item';
import NavDrawer from './nav-drawer';
import routes from '../routes';

/**
 * Navbar.
 */
export default function Navbar() {
  const [state, setState] = useState({
    drawerOpen: false,
  });

  const theme = useTheme();
  const isCollapsed = useMediaQuery('sm', { match: 'down' });

  const toggleDrawer = () => {
    setState({
      drawerOpen: !state.drawerOpen,
    });
  };

  const onCloseDrawer = () => {
    setState({
      drawerOpen: false,
    });
  };

  const onOpenDrawer = () => {
    setState({
      drawerOpen: true,
    });
  };

  const LinkList = () => {
    if (isCollapsed) return <HamburgerButton onClick={() => {}} />;

    return (
      <>
        <NavItem to={routes.theory.index}>theory</NavItem>
        <NavItem to={routes.theory.caseStudy}>case study</NavItem>
        <NavItem to={routes.blog} newTab>
          blog
        </NavItem>
      </>
    );
  };

  return (
    <>
      <nav
        css={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: 60,
          backgroundColor: 'black',
          padding: '0 40px',
        }}
      >
        <ul
          css={{
            display: 'flex',
            listStyle: 'none',
            alignItems: 'center',
            justifyContent: isCollapsed ? 'space-between' : undefined,
            width: '100%',
            maxWidth: 1200,
            margin: '0 auto 0 auto',
            padding: 0,
          }}
        >
          <li
            css={{
              '&::before': {
                content: 'none',
              },
            }}
          >
            <Link href="/">
              <a
                css={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}
              >
                turring
              </a>
            </Link>
          </li>
          <LinkList />
        </ul>
      </nav>
    </>
  );
}
