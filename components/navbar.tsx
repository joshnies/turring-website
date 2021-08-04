import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@geist-ui/react';
import styled from '@emotion/styled';

import HamburgerButton from './hamburger-button';
import NavItem from './nav-item';
import NavDrawer from './nav-drawer';
import routes from '../routes';

/**
 * Navbar.
 */
export default function Navbar(props: { activeRoute?: string }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const theme = useTheme();

  const toggleDrawer = () => setShowDrawer(!showDrawer);
  const DynamicNavItem = styled(NavItem)`
    @media (max-width: ${theme.breakpoints.sm.max}) {
      display: none;
    }
  `;

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
            [`@media (max-width: ${theme.breakpoints.sm.max})`]: {
              justifyContent: 'space-between',
            },
          }}
        >
          <li
            css={{
              margin: '0 0 0 24px',
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
          <DynamicNavItem
            to={routes.theory.index}
            activeRoute={props.activeRoute}
          >
            theory
          </DynamicNavItem>
          <DynamicNavItem
            to={routes.theory.caseStudy}
            activeRoute={props.activeRoute}
          >
            case study
          </DynamicNavItem>
          <DynamicNavItem
            to={routes.blog}
            activeRoute={props.activeRoute}
            newTab
          >
            blog
          </DynamicNavItem>
          <HamburgerButton active={showDrawer} onClick={toggleDrawer} />
        </ul>
      </nav>
      {showDrawer && <NavDrawer />}
    </>
  );
}
