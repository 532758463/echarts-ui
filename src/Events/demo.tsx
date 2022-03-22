import React, { useRef, useEffect } from 'react';
import echarts, { ECOption } from '../baseEcharts';

const Demo: React.FC = () => {
  const myChart = useRef<any>();
  const containerRef = useRef<any>(null);

  useEffect(() => {
    initChart();
  }, []);

  const initChart = () => {
    myChart.current = echarts.init(containerRef.current);
    let option: ECOption = {
      xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      yAxis: { type: 'value', min: 800 },
      series: [
        { data: [820, 932, 901, 934, 1290, 1330, 1320], type: 'bar' },
        { data: [920, 1032, 1001, 1034, 1390, 1430, 1420], type: 'line' },
      ],
    };
    myChart.current && myChart.current.setOption(option, true);

    // 在所有 series 上都触发
    myChart.current.on('click', 'series', function (e: any) {
      console.log(`series listener: click invoke at ${e.componentType}.${e.componentSubType}`);
    });

    // 只在 line 图表上触发
    myChart.current.on('click', 'series.line', function (e: any) {
      console.log(`line listener: click invoke at ${e.componentType}.${e.componentSubType}`);
    });
  };

  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;
};

export default Demo;
