import ThemeToggler from "@/components/ThemeToggler";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="absolute bottom-5 right-2 text-white">
        <ThemeToggler />
      </div>
      {children}
    </div>
  );
}

export default layout;
