import { ArrowLeftCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

interface BackButtonProps{
    link: string;
    text: string;
}

function BackButton({link, text}: BackButtonProps) {
  return (
    <div>
        <Link href={link} className='text-gray-500 flex hover:underline gap-3 items-center font-bold mb-5'>
            <ArrowLeftCircle/>
            {text}
        </Link>
    </div>
  )
}

export default BackButton