import React, { useRef, useEffect } from 'react';
import echarts, { ECOption } from '../baseEcharts';

const Text: React.FC = () => {
  const myChart = useRef<any>();
  const containerRef = useRef<any>(null);

  useEffect(() => {
    initChart();
  }, []);

  const initChart = () => {
    myChart.current = echarts.init(containerRef.current);
    let option: ECOption = {
      title: {
        text: 'test',
        // 通过 triggerEvent 显式声明
        // 该组件将触发事件回调
        triggerEvent: true,
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        triggerEvent: true,
      },
      yAxis: {
        type: 'value',
        triggerEvent: true,
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'bar',
        },
      ],
    };
    myChart.current && myChart.current.setOption(option, true);
    // 注册 `click` 事件回调
    myChart.current.on('click', function (e: any) {
      console.log(`click invoke at ${e.componentType}`);
    });
  };

  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;
};

export default Text;
