const HamburgerLine = () => {
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

export default function HamburgerButton(props: { onClick: () => void }) {
  return (
    <button
      aria-label="open-menu"
      onClick={props.onClick}
      css={{
        background: 'none',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      <HamburgerLine />
      <HamburgerLine />
      <HamburgerLine />
    </button>
  );
}
