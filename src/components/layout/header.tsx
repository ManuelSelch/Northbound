import { Image } from '@mantine/core';

export function Header() {
    return (
        <header className='mb-5 bg-[rgb(236,230,220)]'>
            <Image w={100} src="/northbound-logo.png"/>
        </header>
    );
}