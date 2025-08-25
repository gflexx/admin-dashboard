import React from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Posts',
};

function page() {
  return (
    <div>
        <p className="text-2xl">Posts</p>
    </div>
  )
}

export default page