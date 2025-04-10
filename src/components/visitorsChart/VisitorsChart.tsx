"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function VisitorsChart() {
  const [activeChart, setActiveChart] = React.useState<"desktop" | "mobile">("desktop");
  const [range, setRange] = React.useState<"last7days" | "thisMonth" | "thisYear">("last7days");
  const [chartData, setChartData] = React.useState<{ date: string; desktop: number; mobile: number; }[]>([]);

  // Fetch data from API based on filter
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/visitors?range=${range}`);
      const data = await res.json();
      setChartData(data);
    };
    fetchData();
  }, [range]);

  const total = React.useMemo(() => ({
    desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
    mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
  }), [chartData]);

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Visitors</CardTitle>
          <CardDescription>
            Filter data by time range to track trends
          </CardDescription>
        </div>
        <div className="flex">
        {(["desktop", "mobile"] as const).map((key) => (
  <button
    key={key}
    data-active={activeChart === key}
    className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
    onClick={() => setActiveChart(key)}
  >
    <span className="text-xs text-muted-foreground">
      {chartConfig[key].label}
    </span>
    <span className="text-lg font-bold leading-none sm:text-3xl">
      {total[key].toLocaleString()}
    </span>
  </button>
))}

        </div>
      </CardHeader>

      <CardContent className="px-2 sm:p-6">
        {/* Filter Selector */}
        <div className="flex justify-end mb-4">
          <select
            value={range}
            onChange={(e) => setRange(e.target.value as any)}
            className="border rounded-md px-3 py-1 text-sm"
          >
            <option value="last7days">Last 7 Days</option>
            <option value="thisMonth">This Month</option>
            <option value="thisYear">This Year</option>
          </select>
        </div>

        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <BarChart
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
