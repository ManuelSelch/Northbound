import { Image } from '@mantine/core';

export function Header() {
    return (
        <header className='py-5'>
            <Image w={100} src="/northbound-logo.png"/>
        </header>
    );
}