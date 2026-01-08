import Image from 'next/image'
import React from 'react'

function BusinessInslights() {
  return (
    <div className=' h-screen flex flex-col  gap-1'>
      <h1 className=' text-2xl text-center'> Business Inslights </h1>
      <Image
        src="/content/businessins.jpg"
        height={1000}
        width={1000}
        alt='Business-Inslights'
        className=' rounded-xl opacity-30'
      />
      <p className=' text-red-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias nesciunt explicabo quod porro modi nobis mollitia eveniet consequuntur perferendis nisi, blanditiis delectus voluptas nemo quo labore! Accusamus consequuntur minus deserunt, eligendi placeat harum doloremque corrupti fugiat odit expedita at! Autem, necessitatibus. Quibusdam quos esse voluptatem in aliquid sapiente quod molestias non impedit, necessitatibus provident. Unde placeat labore neque repudiandae?
      </p>
    </div>
  )
}

export default BusinessInslights