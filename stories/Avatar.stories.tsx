import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from '../components/avatar';

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = () => <Avatar />;

export const Default = Template.bind({});
