import React, { useRef, useEffect } from 'react';
import echarts, { ECOption } from '../baseEcharts';

const Action: React.FC = () => {
  const myChart = useRef<any>();
  const containerRef = useRef<any>(null);

  useEffect(() => {
    initChart();
  }, []);

  const initChart = () => {
    myChart.current = echarts.init(containerRef.current);
    const weeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const data = [27, 32, 69, 127, 147, 76, 86];

    let option: ECOption = {
      xAxis: { type: 'category', data: weeks },
      yAxis: { type: 'value' },
      series: [{ type: 'bar', data: data, emphasis: { itemStyle: { color: '#336666' } } }],
    };
    myChart.current && myChart.current.setOption(option, true);
    let cursor = -1;
    setInterval(() => {
      if (cursor >= 0) {
        myChart.current.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: cursor % data.length,
        });
      }
      // 切换高亮数据项
      myChart.current.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: (cursor += 1) % data.length,
      });
    }, 500);
  };

  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;
};

export default Action;
