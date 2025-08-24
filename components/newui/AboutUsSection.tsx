import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

function AboutUsSection() {
  return (
    <div className=' h-screen flex flex-col '>
       <div>We Do </div>
       <div>
            <div className=' border-2 w-[250] h-[400] bg-blend-color-burn rounded-2xl  justify-evenly'>
                <Image 
                src='/content/test.png'
                width={250}
                height={250}
                alt='Banner Image'
                className='rounded-2xl'
                />
                <div className='p-2'>
                    <h2>Data Engineering</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, libero!
                    </p>
                </div>
                <Button>Explore</Button>
            </div>
       </div>
    </div>
  )
}

export default AboutUsSection