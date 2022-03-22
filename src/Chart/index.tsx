import React, { useRef, useEffect } from 'react';
import echarts, { ECOption } from '../baseEcharts';

const Chart: React.FC = () => {
  const myChart = useRef<any>();
  const containerRef = useRef<any>(null);

  useEffect(() => {
    initChart();
  }, []);

  const initChart = () => {
    myChart.current = echarts.init(containerRef.current);
    let dataX = [
      'XX街道',
      'XX街道',
      'XX街道',
      'XX街道',
      'XX街道',
      'XX街道',
      'XX街道',
      'XX街道',
      'XX街道',
      'XX街道',
      'XX街道',
      'XX街道',
      'XX街道',
      'XX街道',
      'XX街道',
      'XX街道',
      'XX街道',
      'XX街道',
    ]; //名称
    let dataY = [20, 50, 15, 35, 50, 30, 40, 50, 60, 20, 50, 15, 35, 50, 30, 40, 50, 60]; //数据
    let zoomShow = false;
    if (dataY.length > 14) {
      zoomShow = true;
    } else {
      zoomShow = false;
    }
    let option = {
      backgroundColor: '#0D2753',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      title: {
        text: '标题',
      },
      legend: { show: true, data:['legend'] },
      grid: {
        top: '10%',
        right: '5%',
        left: '5%',
        bottom: '10%',
      },
      xAxis: [
        {
          type: 'category',
          data: dataX,
          axisLine: {
            lineStyle: {
              color: 'rgba(66, 192, 255, .3)',
            },
          },
          axisLabel: {
            interval: 0,
            margin: 10,
            color: '#05D5FF',
            textStyle: {
              fontSize: 11,
            },
            rotate: 45,
          },
          axisTick: {
            //刻度
            show: false,
          },
        },
      ],
      yAxis: [
        {
          axisLabel: {
            padding: [3, 0, 0, 0],
            formatter: '{value}',
            color: 'rgba(95, 187, 235, 1)',
            textStyle: {
              fontSize: 11,
            },
          },
          axisTick: {
            show: true,
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(66, 192, 255, .3)',
            },
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0)',
            },
          },
        },
      ],
      dataZoom: [
        //滚动条
        {
          show: zoomShow,
          type: 'slider',
          realtime: true,
          startValue: 0,
          endValue: 14,
          xAxisIndex: [0],
          bottom: '10',
          left: '30',
          height: 10,
          borderColor: 'rgba(0,0,0,0)',
          textStyle: {
            color: '#05D5FF',
          },
        },
      ],
      series: [
        {
          name:'legend',
          type: 'bar',
          data: dataY,
          barWidth: '10',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(5, 213, 255, 1)', // 0% 处的颜色
                  },
                  {
                    offset: 0.98,
                    color: 'rgba(5, 213, 255, 0)', // 100% 处的颜色
                  },
                ],
                false,
              ),
              shadowColor: 'rgba(5, 213, 255, 1)',
              shadowBlur: 4,
            },
          },
          label: {
            normal: {
              show: true,
              lineHeight: 10,
              formatter: '{c}',
              position: 'top',
              textStyle: {
                color: '#fff',
                fontSize: 10,
              },
            },
          },
        },
      ],
    };

    myChart.current && myChart.current.setOption(option, true);
  };

  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;
};

export default Chart;
