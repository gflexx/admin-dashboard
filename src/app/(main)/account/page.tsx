import React from 'react'

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Accounts',
};

function page() {
  return (
    <div>
        <h3 className="text-2xl">Account</h3>
    </div>
  )
}

export default page