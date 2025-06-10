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
 *  - data: Array<{ hour: number; total: number; }>
 *  - width?: string|number (defaults to '100%')
 *  - height?: number (defaults to 300)
 *  - title?: string
 *  - subtitle?: string
 *  - barColor?: string (pastel blue by default)
 */
const ActivityChart = ({
  data,
  width = '100%',
  height = 300,
  title,
  subtitle,
  barColor = '#7CB9E8',
}) => {
  // Fill in missing hours with zero values and sort by hour
  const completeData = React.useMemo(() => {
    const hourMap = new Map(data.map(item => [item.hour, item.total]));
    return Array.from({ length: 24 }, (_, hour) => ({
      hour,
      total: hourMap.get(hour) || 0
    }));
  }, [data]);

  // Format hour to show in 24h format
  const formatHour = (hour) => `${hour}:00`;

  // Calculate max total and round up to nearest multiple of 5
  const maxTotal = completeData.reduce((max, entry) => Math.max(max, entry.total), 0);
  const maxTick = Math.ceil(maxTotal / 5) * 5;
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
          data={completeData}
          margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            className="dark:stroke-neutral-700"
          />
          <XAxis
            dataKey="hour"
            tickFormatter={formatHour}
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
            contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc' }}
            wrapperStyle={{ outline: 'none' }}
            formatter={(value, name) => [value, 'Partidas']}
            labelFormatter={(hour) => `Hora: ${hour}:00`}
          />
          <Legend
            wrapperStyle={{ color: '#666' }}
            payload={[{ value: 'Partidas', type: 'square', color: barColor }]}
          />
          <Bar dataKey="total" name="Partidas" fill={barColor} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
