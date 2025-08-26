import React from 'react'
import { Metadata } from 'next';
import PostTable from '@/components/posts/PostTable';
import BackButton from '@/components/BackButton';
import PostPagination from '@/components/posts/PostPagination';
 
export const metadata: Metadata = {
  title: 'Posts',
};

function page() {
  return (
    <div>
        <BackButton text='Go Back' link='/'/>
        <PostTable title='Posts'/>
        <PostPagination/>
    </div>
  )
}

export default page