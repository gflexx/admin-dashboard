import React from "react";
import { Card, CardContent } from "../ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
    title: string;
    count: number;
    icon: React.ReactElement<LucideIcon>
}

function DashboardCard({title, count, icon}: DashboardCardProps) {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800 p-2">
      <CardContent>
        <h3 className="text-2xl text-center mb-2 font-bold text-slate-500 dark:text-slate-200">
          {title}
        </h3>
        <div className="flex gap-5 justify-center items-center">
          {icon}
          <h3 className="text-3xl text-center font-bold text-slate-500 dark:text-slate-200">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
}

export default DashboardCard;
