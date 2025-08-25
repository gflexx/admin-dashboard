"use client";

import AnalyticChart from "@/components/dashboard/AnalyticChart";
import DashboardStatistics from "@/components/dashboard/DashboardStatistics";
import PostTable from "@/components/posts/PostTable";

export default function Home() {
  return (
    <>
      <div className="space-y-9">
        <DashboardStatistics/>
        <AnalyticChart/>
        <PostTable
          title="Latest Posts"
          limit={5}/>
      </div>
    </>
  );
}
