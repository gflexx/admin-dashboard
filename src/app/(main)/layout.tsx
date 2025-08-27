import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block h-[100vh] md:w-1/6">
          <Sidebar />
        </div>
        <div className="w-full p-5">{children}</div>
      </div>
    </>
  );
}

export default layout;
