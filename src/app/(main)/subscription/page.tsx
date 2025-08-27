import React from "react";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Subscriptions',
};

function page() {
  return (
    <div>
        <h3 className="text-2xl">Subscriptions</h3>
    </div>
  );
}

export default page;
