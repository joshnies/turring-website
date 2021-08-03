import NavDrawerItem from './nav-drawer-item';
import routes from '../routes';

/**
 * Navbar drawer.
 */
export default function NavDrawer() {
  return (
    <ul
      css={{
        margin: 0,
        padding: '24px 0',
        backgroundColor: 'black',
      }}
    >
      <NavDrawerItem to={routes.theory.index}>theory</NavDrawerItem>
      <NavDrawerItem to={routes.theory.caseStudy}>case study</NavDrawerItem>
      <NavDrawerItem to={routes.blog} newTab>
        blog
      </NavDrawerItem>
    </ul>
  );
}
