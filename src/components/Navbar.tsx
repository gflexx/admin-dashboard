import Link from 'next/link'
import React from 'react'
import logo from '../../assets/Group 1686551587.svg'
import profileImg from '../../assets/1681073508132.jpg'
import Image from 'next/image'
import { Avatar, AvatarImage } from './ui/avatar'

function Navbar() {
  return (
    <div className='bg-primary dark:bg-slate-700 text-white py-3 px-5 flex justify-between'>
      <Link href='/'>
        <Image src={logo} alt='logo' width={15} className='rounded-full'/>
      </Link>
      <Avatar>
        <AvatarImage src={profileImg.src}/>
      </Avatar>
    </div>
  )
}

export default Navbar