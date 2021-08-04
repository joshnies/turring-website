export default function HamburgerButton(props: {
  isActive: boolean;
  onClick: () => void;
}) {
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
    if (props.isActive) {
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
        margin: '0 40px 0 0',
      }}
    >
      <Icon />
    </button>
  );
}
