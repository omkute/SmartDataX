import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Menu, Moon, Phone } from 'lucide-react'


//  sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg
interface NavBarProps {
    active?: boolean;
    
}

function NavBar({ active }: NavBarProps) {
    return (
        <div className='w-full mt-1'>
            <div className=' lg:px-[10vw] flex justify-between lg:justify-baseline supports-backdrop-blur:bg-background/90'>
                <div>
                    <Link href='/' >
                        <Image
                            src="/logo.png"
                            height={150}
                            width={150}
                            alt='Logo'
                            className='rounded-2xl'
                        />
                    </Link>
                </div>
                <div className=' items-center hidden lg:flex'>
                    <ul className=' flex gap-4'>
                        <Link href='#' className={`font-semibold text-black/50 font-sans ${ active ? " font-bold":""}`} >Home</Link>
                        <Link href='#' className={`font-semibold text-black/50 font-sans ${ active ? " font-bold":""}`} >About</Link>
                        <Link href='#' className={`font-semibold text-black/50 font-sans ${ active ? " font-bold":""}`} >Cases</Link>
                        <Link href='#' className={`font-semibold text-black/50 font-sans ${ active ? " font-bold":""}`} >Testimonial</Link>
                        <Link href='#' className={`font-semibold text-black/50 font-sans ${ active ? " font-bold":""}`} >Pricing</Link>
                    </ul>
                </div>
                <div className=' md:flex md:items-center flex items-center space-x-5'>
                    <Moon className=' hidden lg:block ' />
                    <Button className=' hidden lg:block'>Login</Button>
                    <Button className=' hidden  lg:flex bg-green-400/70 hover:bg-green-400'>
                        <Phone className=' hidden lg:block' />
                        Get a Quote
                    </Button>
                    <Menu className=' lg:hidden mx-3' />
                </div>
                {/* Mobile Menu */}
               
                
            </div>
        </div>
    )
}

export default NavBar