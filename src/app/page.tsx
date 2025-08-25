"use client";

import DashboardStatistics from "@/components/dashboard/DashboardStatistics";
import PostTable from "@/components/posts/PostTable";

export default function Home() {
  return (
    <>
      <div className="space-y-9">
        <DashboardStatistics/>
        <PostTable
          title="Latest Posts"
          limit={5}/>
        
      </div>
    </>
  );
}
