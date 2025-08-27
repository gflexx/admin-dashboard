import React from 'react'

function layout({children}: {children: React.ReactNode}) {
  return (
    <div className='h-[100vh] flex items-center'>
        {children}
    </div>
  )
}

export default layout