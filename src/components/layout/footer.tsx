import { Anchor, Divider, Group, Image } from '@mantine/core';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'Blog' },
  { link: '#', label: 'Careers' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className="mt-10 w-full bg-[rgb(236,230,220)]">
        <Divider className="pb-5" />
        <Image w={100} src="/northbound-logo.png" />

        <div className="w-full flex justify-end">
            <Group align="end">
            {items}
            </Group>
        </div>
    </div>
  );
}