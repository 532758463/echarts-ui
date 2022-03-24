import React, { useRef, useEffect } from 'react';
import echarts, { ECOption } from '../baseEcharts';

const Line: React.FC = () => {
  const myChart = useRef<any>();
  const containerRef = useRef<any>(null);

  useEffect(() => {
    initChart();
  }, []);

  function fetchData() {
    return new Promise((r) => {
      setTimeout(() => {
        r([27, 32, 69, 127, 147, 76, 86]);
      }, 3000);
    });
  }

  const initChart = async () => {
    myChart.current = echarts.init(containerRef.current);
    myChart.current.showLoading();
    // 3. 调用异步接口加载数据
    const data = (await fetchData()) as number[];
    let option: ECOption = {
      xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      yAxis: { type: 'value' },
      series: [{ type: 'bar', data }],
    };
    myChart.current && myChart.current.setOption(option, true);
    // 5. 隐藏加载动画
    myChart.current.hideLoading();
  };

  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;
};

export default Line;
