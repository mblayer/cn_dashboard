// src/components/MapBarChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/**
 * Props:
 *  - data: Array<{ map: string; count: number; }>
 *  - width?: string|number (defaults to '100%')
 *  - height?: number (defaults to 300)
 *  - title?: string
 *  - subtitle?: string
 *  - barColor?: string (pastel violet by default)
 */
const MapBarChart = ({
  data,
  width = "100%",
  height = 300,
  title,
  subtitle,
  barColor = "#C8A2C8",
}) => {
  const maxCount = data.reduce((max, entry) => Math.max(max, entry.count), 0);
  const maxTick = Math.ceil(maxCount / 5) * 5;
  const ticks = Array.from(
    { length: maxTick / 5 + 1 },
    (_, i) => i * 5
  );

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6 transition-colors">
      {title && (
        <h2 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-neutral-500 dark:text-neutral-400 mb-4">{subtitle}</p>
      )}
      <ResponsiveContainer width={width} height={height}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="2 2"
            className="dark:stroke-neutral-700"
          />
          <XAxis
            dataKey="map"
            axisLine={{ stroke: '#333' }}
            tick={{ fill: '#666', className: 'dark:fill-neutral-400' }}
          />
          <YAxis
            ticks={ticks}
            interval={0}
            domain={[0, maxTick]}
            axisLine={{ stroke: '#333' }}
            tick={{ fill: '#666', className: 'dark:fill-neutral-400' }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#262626', borderColor: '#ccc' }}
            wrapperStyle={{ outline: 'none' }}
          />
          <Legend
            wrapperStyle={{ color: '#666' }}
            payload={[{ value: 'Partidas', type: 'rect', color: barColor }]}
          />
          <Bar dataKey="count" name="Partidas" fill={barColor} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MapBarChart;
