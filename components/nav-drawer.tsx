import { useTheme } from '@geist-ui/react';
import { ArrowUpRight } from '@geist-ui/react-icons';

import NavDrawerItem from './nav-drawer-item';
import routes from '../routes';

/**
 * Navbar drawer.
 */
export default function NavDrawer() {
  const theme = useTheme();

  return (
    <ul
      css={{
        margin: 0,
        padding: '24px 0',
        backgroundColor: 'black',
        [`@media (min-width: ${theme.breakpoints.sm.max})`]: {
          display: 'none',
        },
      }}
    >
      <NavDrawerItem to={routes.theory.index}>theory</NavDrawerItem>
      <NavDrawerItem to={routes.theory.caseStudy}>case study</NavDrawerItem>
      <NavDrawerItem to={routes.blog} newTab>
        blog
      </NavDrawerItem>
      <NavDrawerItem to={routes.dash}>
        go to dashboard{' '}
        <ArrowUpRight size={18} color="white" css={{ marginTop: 5 }} />
      </NavDrawerItem>
    </ul>
  );
}
