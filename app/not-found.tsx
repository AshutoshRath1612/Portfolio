import React from 'react'
import Container from './components/ui/Container'
import Link from 'next/link'

const NotFound = () => {
  return (
    <Container className='flex min-h-svh flex-col items-center justify-center text-center'>
        <p className='font-mono text-sm uppercase tracking-[0.25em] text-accent'>404</p>
        <h1 className='mt-4 font-display text-display-md font-semibold text-foreground'>
            Page not found
        </h1>
        <p className='mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground'>
            The page you&rsquo;re looking for doesn&rsquo;t exist or has moved;
        </p>
        <Link href="/"
        className='mt-10 inline-flex h-12 items-center rounded-full bg-foreground px-7 text-base font-medium text-background transition-colors hover:bg-foreground/90'
        >
        Back to home
        </Link>
    </Container>
  )
}

export default NotFound