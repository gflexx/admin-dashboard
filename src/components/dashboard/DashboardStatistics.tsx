import React from "react";
import DashboardCard from "./DashboardCard";
import {
  MessageCircleMore,
  Newspaper,
  PackageSearch,
  Sheet,
  UserCircle2,
} from "lucide-react";

function DashboardStatistics() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Stock"
          count={3}
          icon={<Sheet className="text-slate-500" size={45} />}
        />
        <DashboardCard
          title="Products"
          count={7}
          icon={<PackageSearch className="text-slate-500" size={45} />}
        />
        <DashboardCard
          title="Posts"
          count={17}
          icon={<Newspaper className="text-slate-500" size={45} />}
        />
        <DashboardCard
          title="Users"
          count={12}
          icon={<UserCircle2 className="text-slate-500" size={45} />}
        />
        <DashboardCard
          title="Comments"
          count={15}
          icon={<MessageCircleMore className="text-slate-500" size={45} />}
        />
      </div>
    </div>
  );
}

export default DashboardStatistics;
