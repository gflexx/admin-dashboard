import React from 'react'
import { Metadata } from 'next';
import AuthTabs from '@/components/auth/AuthTabs';
 
export const metadata: Metadata = {
  title: 'Auth',
};

function page() {
  return (
    <div className=''>
        <AuthTabs/>
    </div>
  )
}

export default page