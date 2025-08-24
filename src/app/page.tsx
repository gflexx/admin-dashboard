"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  function btnClicked() {
    console.log("Clicked");
  }
  return (
    <>
      <p className="text-c2xlnter">Dashboard</p>
      <Button onClick={() => btnClicked()}>CLick Me</Button>
    </>
  );
}
