import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@geist-ui/react';
import styled from '@emotion/styled';
import { ArrowUpRight } from '@geist-ui/react-icons';

import HamburgerButton from './hamburger-button';
import NavItem from './nav-item';
import NavDrawer from './nav-drawer';
import Avatar from './avatar';
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
          justifyContent: 'space-between',
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
            to={routes.blog}
            activeRoute={props.activeRoute}
            newTab
          >
            blog
          </DynamicNavItem>
          <DynamicNavItem to={routes.contactUs} activeRoute={props.activeRoute}>
            contact us
          </DynamicNavItem>
        </ul>
        <div
          css={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            width: '100%',
            marginRight: 40,
          }}
        >
          <DynamicNavItem to={routes.dash} activeRoute={props.activeRoute}>
            go to dashboard{' '}
            <ArrowUpRight size={18} color="white" css={{ marginTop: 5 }} />
          </DynamicNavItem>
          <Avatar />
          <HamburgerButton active={showDrawer} onClick={toggleDrawer} />
        </div>
      </nav>
      {showDrawer && <NavDrawer />}
    </>
  );
}
