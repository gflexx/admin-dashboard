import React from 'react'
import { Metadata } from 'next';
import PostTable from '@/components/posts/PostTable';
import BackButton from '@/components/BackButton';
 
export const metadata: Metadata = {
  title: 'Posts',
};

function page() {
  return (
    <div>
        <BackButton text='Go Back' link='/'/>
        <p className="text-2xl">Posts</p>
        <PostTable/>
    </div>
  )
}

export default page