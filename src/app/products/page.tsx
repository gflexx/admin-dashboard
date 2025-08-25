import React from "react";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Products',
};

function page() {
  return (
    <div>
        <p className="text-2xl">Products</p>
    </div>
  );
}

export default page;
