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
    const a = 3;
    const b = 20;
    for (var i = 0; i <= 360; i++) {
      const x = (i / 360) * Math.PI;
      // 椭圆公式
      const r = Math.sqrt(
        Math.pow(a * b, 2) / (Math.pow(a * Math.sin(x), 2) + Math.pow(b * Math.cos(x), 2)),
      );
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
