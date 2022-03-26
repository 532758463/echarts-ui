import React, { useRef, useEffect } from 'react';
import echarts, { ECOption } from '../baseEcharts';

const Polar: React.FC = () => {
  const myChart = useRef<any>();
  const containerRef = useRef<any>(null);

  useEffect(() => {
    initChart();
  }, []);

  const initChart = async () => {
    myChart.current = echarts.init(containerRef.current);

    let option: ECOption = {
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      angleAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      polar: {},
      radiusAxis: { type: 'value' },
      series: [
        {
          coordinateSystem: 'polar',
          data: [820, 912, 899, 786, 1290, 1330, 1320],
          type: 'bar',
          name: '水果',
          stack: 'search engine',
        },
        {
          coordinateSystem: 'polar',
          data: [840, 1002, 789, 934, 1090, 1728, 1468],
          type: 'bar',
          name: '蔬菜',
          stack: 'search engine',
        },
        {
          coordinateSystem: 'polar',
          data: [780, 340, 879, 624, 1588, 1624, 1890],
          type: 'bar',
          name: '百货',
          stack: 'search engine',
        },
      ],
      label: { show: true },
    };
    myChart.current && myChart.current.setOption(option, true);
  };

  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;
};

export default Polar;
