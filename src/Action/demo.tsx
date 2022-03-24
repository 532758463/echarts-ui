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
    const data = [
      { name: 'X-0', data: [27, 32, 69, 127, 147, 76, 86] },
      { name: 'X-1', data: [58, 68, 1, 154, 156, 168, 38] },
      { name: 'X-2', data: [44, 54, 176, 113, 62, 51, 18] },
      { name: 'X-3', data: [80, 42, 5, 92, 45, 108, 98] },
      { name: 'X-4', data: [22, 76, 2, 45, 173, 17, 9] },
      { name: 'X-5', data: [136, 164, 90, 161, 171, 106, 18] },
      { name: 'X-6', data: [73, 163, 43, 159, 135, 99, 9] },
      { name: 'X-7', data: [151, 21, 103, 165, 177, 134, 70] },
      { name: 'X-8', data: [43, 101, 76, 133, 172, 85, 64] },
      { name: 'X-9', data: [130, 72, 65, 85, 112, 24, 85] },
    ];
    const aggData = data.map(({ name, data }) => ({
      name,
      value: data.reduce((r, v) => r + v, 0),
    }));

    const option: ECOption = {
      xAxis: { type: 'category', data: aggData.map(({ name }) => name) },
      yAxis: { type: 'value' },
      grid: { width: '47%' },
      tooltip: { show: true },
      series: [
        { type: 'bar', data: aggData, emphasis: { itemStyle: { color: '#336666' } } },
        {
          type: 'pie',
          data: aggData,
          center: ['75%', '50%'],
          radius: '43%',
        },
      ],
    };
    myChart.current && myChart.current.setOption(option, true);
    // 监听鼠标hover事件
    myChart.current.on('mouseover', 'series', (event: any) => {
      const { seriesType, name } = event;
      if (seriesType === 'pie') {
        // 鼠标停留在饼图上时，触发柱状图对应数据项的高亮效果
        myChart.current.dispatchAction({ type: 'highlight', seriesIndex: 0, name });
      } else if (seriesType === 'bar') {
        console.log(name);
        // 鼠标停留在柱状图上时，触发饼图对应数据项的选中效果
        myChart.current.dispatchAction({ type: 'pieSelect', seriesIndex: 1, name });
      }
    });

    // 在柱状图上监听鼠标click事件
    myChart.current.on('click', 'series.bar', (event: any) => {
      const { name } = event;
      // 柱状图上发生点击事件时，图表聚焦到数据项对应的细节数据上
      const serie = data.find((serie) => serie.name === name);
      myChart.current.setOption({
        xAxis: {
          data: weeks,
        },
        series: [
          { data: serie?.data },
          { data: serie?.data.map((value, index) => ({ name: weeks[index], value })) },
        ],
      });
    });
  };

  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;
};

export default Action;
