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
      polar: {},
      angleAxis: {
        type: 'value',
        startAngle: 0,
        min: 0,
        max: 360,
      },
      radiusAxis: {
        max: 5,
      },
      series: [
        {
          // 指定改序列会被应用在极坐标系上
          coordinateSystem: 'polar',
          type: 'line',
          data: [
            [4, -155],
            [4, -25],
            [4, 135],
            [4, -90],
            [4, 45],
            [4, -155],
          ],
        },
      ],
    };
    myChart.current && myChart.current.setOption(option, true);
  };

  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;
};

export default Polar;
