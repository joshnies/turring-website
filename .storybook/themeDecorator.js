import { GeistProvider, CssBaseline } from '@geist-ui/react';

/**
 * Theme decorator for Storybook to apply theme to all stories.
 *
 * @param {*} storyFn Render function for this story.
 * @returns Component for this story.
 */
export default function ThemeDecorator(storyFn) {
  return (
    <GeistProvider>
      <CssBaseline />
      {storyFn()}
    </GeistProvider>
  );
}
