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

  return (
    <>
      <nav
        css={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: 60,
          backgroundColor: 'black',
        }}
      >
        <ul
          css={{
            display: 'flex',
            listStyle: 'none',
            alignItems: 'center',
            width: '100%',
            maxWidth: 1200,
            margin: '0 auto 0 auto',
            padding: 0,
            [`@media (max-width: ${theme.breakpoints.md.max})`]: {
              padding: '0 40px',
            },
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
          <NavItem to={routes.theory.index}>theory</NavItem>
          <NavItem to={routes.theory.caseStudy}>case study</NavItem>
          <NavItem to={routes.blog} newTab>
            blog
          </NavItem>
        </ul>
      </nav>
    </>
  );
}
