import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar from '../components/navbar';
import routes from '../routes';

export default {
  title: 'Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => (
  <Navbar activeRoute={routes.theory.index} />
);

export const Default = Template.bind({});
