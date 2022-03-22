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
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      title: {
        text: '字体测试\n第二行效果',
        left: '30%',
        top: '30%',
        // 跳转地址
        link: '/',
        textStyle: {
          fontSize: 20,
          textBorderWidth: 10,
          //文本描边颜色
          textBorderColor: '#ddd',
          lineHeight: 40,
          textShadowColor: '#ccc',
          textShadowBlur: 8,
          textShadowOffsetX: 20,
          textShadowOffsetY: 20,
        },
      },
    };
    myChart.current && myChart.current.setOption(option, true);
  };

  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;
};

export default Text;
