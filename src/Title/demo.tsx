import React, { useRef, useEffect } from 'react';
import echarts, { ECOption } from '../baseEcharts';

const Title: React.FC = () => {
  const myChart = useRef<any>();
  const containerRef = useRef<any>(null);

  useEffect(() => {
    initChart();
  }, []);

  const initChart = () => {
    myChart.current = echarts.init(containerRef.current);
    let option: ECOption = {
      title: [
        { text: 'title 1', top: 10, left: '30%' },
        { text: 'title 2', top: 40, left: '30%' },
        { text: 'title 3', top: 70, left: '30%' },
        { text: 'title 4', top: 100, left: '30%' },
      ],
    };
    myChart.current && myChart.current.setOption(option, true);
  };

  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;
};

export default Title;
