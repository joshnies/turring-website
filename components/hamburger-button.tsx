import { useTheme } from '@geist-ui/react';

export default function HamburgerButton(props: {
  active: boolean;
  onClick: () => void;
}) {
  const theme = useTheme();

  const Line = () => {
    return (
      <div
        css={{
          width: 25,
          height: 3,
          background: 'white',
          marginBottom: 7,
          borderRadius: 2,
          '&:last-child': {
            marginBottom: 0,
          },
        }}
      />
    );
  };

  const Icon = () => {
    if (props.active) {
      return (
        <>
          <Line />
          <Line />
        </>
      );
    }

    return (
      <>
        <Line />
        <Line />
        <Line />
      </>
    );
  };

  return (
    <button
      aria-label="open-menu"
      onClick={props.onClick}
      css={{
        background: 'none',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        margin: 0,
        [`@media (min-width: ${theme.breakpoints.sm.max})`]: {
          display: 'none',
        },
      }}
    >
      <Icon />
    </button>
  );
}
