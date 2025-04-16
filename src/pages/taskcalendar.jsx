import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './heatmap-custom.css'; // 你可以在这里自定义颜色

const TaskCalendar = ({ stats }) => {
  const today = new Date();
  const startDate = new Date();
  startDate.setMonth(today.getMonth() - 2); // 最近三个月

  const values = Object.entries(stats).map(([date, count]) => ({
    date,
    count,
  }));

  return (
    <div className="calendar-box">
      <CalendarHeatmap
        startDate={startDate}
        endDate={today}
        values={values}
        classForValue={(value) => {
          if (!value) return 'color-empty';
          if (value.count >= 4) return 'color-scale-4';
          if (value.count >= 3) return 'color-scale-3';
          if (value.count >= 2) return 'color-scale-2';
          return 'color-scale-1';
        }}
        tooltipDataAttrs={(value) => ({
          'data-tip': `${value.date}: 完成 ${value.count || 0} 项`,
        })}
        gutterSize={1}
        showWeekdayLabels={false}
        squareSize={5}
      />
    </div>
  );
};

export default TaskCalendar;
