import React from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Profile',
};

function page() {
  return (
    <div>
        <h3 className="text-2xl">Auth</h3>
    </div>
  )
}

export default page