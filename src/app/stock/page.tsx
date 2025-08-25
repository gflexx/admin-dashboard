import React from "react";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Stock',
};

function page() {
  return (
    <div>
      <p className="text-2xl">Stock</p>
    </div>
  );
}

export default page;
