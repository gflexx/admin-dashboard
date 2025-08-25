"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import data from "@/data/analytics";

function AnalyticChart() {
  return (
    <>
        <Card>
            <CardHeader>
                <CardTitle>Analytics For This Year</CardTitle>
                <CardDescription>Views per Month</CardDescription>
            </CardHeader>
            <CardContent>
                <div style={{width: '100%', height: 270}}>
                    <ResponsiveContainer>
                        <LineChart height={270} data={data}>
                            <Line type='monotone' dataKey='uv' stroke="#8884d8"/>
                            <CartesianGrid stroke="#ccc"/>
                            <XAxis dataKey={'name'}/>
                            <YAxis/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    </>
  );
}

export default AnalyticChart;
