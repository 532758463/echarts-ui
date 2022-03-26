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
    const data = [];
    for (let i = 0; i <= 360; i++) {
      var x = (i / 360) * Math.PI;
      // 花瓣图公式：
      // r = a + b * |sin(c * θ)|
      var r = 4 + 20 * Math.abs(Math.sin(8 * x));
      data.push([r, i]);
    }

    let option: ECOption = {
      polar: {},
      angleAxis: { type: 'value', startAngle: 0 },
      radiusAxis: { min: 0 },
      series: [{ showSymbol: false, coordinateSystem: 'polar', type: 'line', data: data }],
    };
    myChart.current && myChart.current.setOption(option, true);
  };

  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;
};

export default Polar;
