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
    const max = 300;
    for (let i = 0; i <= max; i++) {
      const angle = Math.ceil(i * ((360 * 6) / max));
      // 根据阿基米德螺旋公式：
      // r = a + b * θ
      const r = angle;
      data.push([r, angle]);
    }

    let option: ECOption = {
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      polar: {},
      angleAxis: {
        type: 'value',
        startAngle: 0,
        min: 0,
        max: 360,
      },
      radiusAxis: {},
      series: [{ showSymbol: false, coordinateSystem: 'polar', type: 'line', data: data }],
    };
    myChart.current && myChart.current.setOption(option, true);
  };

  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;
};

export default Polar;
