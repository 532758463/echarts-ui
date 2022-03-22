import React, { useRef, useEffect } from 'react';
import echarts, { ECOption } from '../baseEcharts';

const Demo2: React.FC = () => {
  const myChart = useRef<any>();
  const containerRef = useRef<any>(null);

  useEffect(() => {
    initChart();
  }, []);

  const initChart = () => {
    myChart.current = echarts.init(containerRef.current);
    let option: ECOption = {
      // grid: { triggerEvent: true },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'bar',
        },
      ],
      title: { text: 'test' },
    };
    myChart.current && myChart.current.setOption(option, true);

    // 在所有 series 上都触发
    myChart.current.on('click', { dataIndex: 1 }, (e: any) => {
      console.log(`click invoke with data index: ${e.dataIndex}`);
    });
  };

  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;
};

export default Demo2;
