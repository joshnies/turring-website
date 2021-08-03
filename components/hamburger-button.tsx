import { Button } from '@geist-ui/react';

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
    <Button
      iconRight={
        <div>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </div>
      }
      auto
      size="small"
      aria-label="open-menu"
      onClick={props.onClick}
    />
  );
}
