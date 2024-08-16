import React from 'react'
import Image from 'next/image'
import { ModeToggle } from './toggle-Mode'


export default function navbar() {
    return (
        <nav className='flex items-center w-full lg:max-w-5xl'>
        <div className='flex items-center'>
            <Image 
                src='/logo.svg'
                alt='Logo'
                width={120} 
                height={40} 
                className='dark:invert'
            />
        </div>
    
        <div className='ml-auto'>
            <ModeToggle />
        </div>
    </nav>
    )
}
