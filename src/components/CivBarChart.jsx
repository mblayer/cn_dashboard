// src/components/CivBarChart.jsx
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

/**
 * Props:
 *  - data: Array<{ civ: string; count: number; }>
 *  - width?: string|number (defaults to '100%')
 *  - height?: number (defaults to 300)
 *  - title?: string
 *  - subtitle?: string
 *  - barColor?: string (pastel green by default)
 */
const CivBarChart = ({
  data,
  width = '100%',
  height = 300,
  title,
  subtitle,
  barColor = '#8BCF9E',
}) => {
  // Calculate max count and round up to nearest multiple of 5
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
        <p className="text-neutral-500 dark:text-neutral-400 mb-4">
          {subtitle}
        </p>
      )}
      <ResponsiveContainer width={width} height={height}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            className="dark:stroke-neutral-700"
          />
          <XAxis
            type="number"
            ticks={ticks}
            interval={0}
            domain={[0, maxTick]}
            axisLine={{ stroke: '#333' }}
            tick={{ fill: '#666', className: 'dark:fill-neutral-400' }}
          />
          <YAxis
            type="category"
            dataKey="civ"
            axisLine={{ stroke: '#333' }}
            tick={{ fill: '#666', className: 'dark:fill-neutral-400' }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc' }}
            wrapperStyle={{ outline: 'none' }}
          />
          <Legend
            wrapperStyle={{ color: '#666' }}
            payload={[{ value: 'Partidas', type: 'square', color: barColor }]}
          />
          <Bar dataKey="count" name="Partidas" fill={barColor} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CivBarChart;