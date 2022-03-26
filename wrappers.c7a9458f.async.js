(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"9kvl":function(n,e,t){"use strict";var r=t("FfOG");t.d(e,"a",(function(){return r["b"]}));t("bCY9")},afA6:function(n,e,t){"use strict";t.r(e);var r=t("0Owb"),a=t("q1tI"),o=t.n(a),i=t("q3YX"),s=t("9og8"),c=t("WmNS"),u=t.n(c),p=t("LtsZ"),l="import React, { useRef, useEffect } from 'react';\nimport echarts, { ECOption } from '../baseEcharts';\n\nconst Action: React.FC = () => {\n  const myChart = useRef<any>();\n  const containerRef = useRef<any>(null);\n\n  useEffect(() => {\n    initChart();\n  }, []);\n\n  const initChart = () => {\n    myChart.current = echarts.init(containerRef.current);\n    const weeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];\n    const data = [27, 32, 69, 127, 147, 76, 86];\n\n    let option: ECOption = {\n      xAxis: { type: 'category', data: weeks },\n      yAxis: { type: 'value' },\n      series: [{ type: 'bar', data: data, emphasis: { itemStyle: { color: '#336666' } } }],\n    };\n    myChart.current && myChart.current.setOption(option, true);\n    let cursor = -1;\n    setInterval(() => {\n      if (cursor >= 0) {\n        myChart.current.dispatchAction({\n          type: 'downplay',\n          seriesIndex: 0,\n          dataIndex: cursor % data.length,\n        });\n      }\n      // \u5207\u6362\u9ad8\u4eae\u6570\u636e\u9879\n      myChart.current.dispatchAction({\n        type: 'highlight',\n        seriesIndex: 0,\n        dataIndex: (cursor += 1) % data.length,\n      });\n    }, 500);\n  };\n\n  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;\n};\n\nexport default Action;",h="import * as echarts from 'echarts/core';\nimport {\n  BarChart,\n  // \u7cfb\u5217\u7c7b\u578b\u7684\u5b9a\u4e49\u540e\u7f00\u90fd\u4e3a SeriesOption\n  BarSeriesOption,\n  LineChart,\n  LineSeriesOption,\n  PieChart,\n  PieSeriesOption,\n} from 'echarts/charts';\nimport {\n  TitleComponent,\n  // \u7ec4\u4ef6\u7c7b\u578b\u7684\u5b9a\u4e49\u540e\u7f00\u90fd\u4e3a ComponentOption\n  TitleComponentOption,\n  TooltipComponent,\n  TooltipComponentOption,\n  GridComponent,\n  GridComponentOption,\n  // \u6570\u636e\u96c6\u7ec4\u4ef6\n  DatasetComponent,\n  DatasetComponentOption,\n  // \u5185\u7f6e\u6570\u636e\u8f6c\u6362\u5668\u7ec4\u4ef6 (filter, sort)\n  TransformComponent,\n  ToolboxComponent,\n  LegendComponent,\n  DataZoomComponent,\n  DataZoomComponentOption,\n} from 'echarts/components';\nimport { LabelLayout, UniversalTransition } from 'echarts/features';\nimport { CanvasRenderer, SVGRenderer } from 'echarts/renderers';\nimport { XAXisOption, YAXisOption } from 'echarts/types/dist/shared';\n// import { EChartsOption } from 'echarts/types/dist/shared';\n\n// \u901a\u8fc7 ComposeOption \u6765\u7ec4\u5408\u51fa\u4e00\u4e2a\u53ea\u6709\u5fc5\u987b\u7ec4\u4ef6\u548c\u56fe\u8868\u7684 Option \u7c7b\u578b\nexport type ECOption = echarts.ComposeOption<\n  | BarSeriesOption\n  | LineSeriesOption\n  | TitleComponentOption\n  | TooltipComponentOption\n  | GridComponentOption\n  | DatasetComponentOption\n  | XAXisOption\n  | YAXisOption\n  | TitleComponentOption\n  | TooltipComponentOption\n  | GridComponentOption\n  | LineSeriesOption\n  | DataZoomComponentOption\n  | PieSeriesOption\n>;\n// export type ECOption = EChartsOption;\n// \u6ce8\u518c\u5fc5\u987b\u7684\u7ec4\u4ef6\necharts.use([\n  TitleComponent,\n  TooltipComponent,\n  GridComponent,\n  DatasetComponent,\n  TransformComponent,\n  BarChart,\n  LabelLayout,\n  UniversalTransition,\n  CanvasRenderer,\n  LineChart,\n  SVGRenderer,\n  PieChart,\n  ToolboxComponent,\n  LegendComponent,\n  DataZoomComponent,\n]);\n\nexport default echarts;",d="import React, { useRef, useEffect } from 'react';\nimport echarts, { ECOption } from '../baseEcharts';\n\nconst Action: React.FC = () => {\n  const myChart = useRef<any>();\n  const containerRef = useRef<any>(null);\n\n  useEffect(() => {\n    initChart();\n  }, []);\n\n  const initChart = () => {\n    myChart.current = echarts.init(containerRef.current);\n    const weeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];\n    const data = [\n      { name: 'X-0', data: [27, 32, 69, 127, 147, 76, 86] },\n      { name: 'X-1', data: [58, 68, 1, 154, 156, 168, 38] },\n      { name: 'X-2', data: [44, 54, 176, 113, 62, 51, 18] },\n      { name: 'X-3', data: [80, 42, 5, 92, 45, 108, 98] },\n      { name: 'X-4', data: [22, 76, 2, 45, 173, 17, 9] },\n      { name: 'X-5', data: [136, 164, 90, 161, 171, 106, 18] },\n      { name: 'X-6', data: [73, 163, 43, 159, 135, 99, 9] },\n      { name: 'X-7', data: [151, 21, 103, 165, 177, 134, 70] },\n      { name: 'X-8', data: [43, 101, 76, 133, 172, 85, 64] },\n      { name: 'X-9', data: [130, 72, 65, 85, 112, 24, 85] },\n    ];\n    const aggData = data.map(({ name, data }) => ({\n      name,\n      value: data.reduce((r, v) => r + v, 0),\n    }));\n\n    const option: ECOption = {\n      xAxis: { type: 'category', data: aggData.map(({ name }) => name) },\n      yAxis: { type: 'value' },\n      grid: { width: '47%' },\n      tooltip: { show: true },\n      series: [\n        { type: 'bar', data: aggData, emphasis: { itemStyle: { color: '#336666' } } },\n        {\n          type: 'pie',\n          data: aggData,\n          center: ['75%', '50%'],\n          radius: '43%',\n        },\n      ],\n    };\n    myChart.current && myChart.current.setOption(option, true);\n    // \u76d1\u542c\u9f20\u6807hover\u4e8b\u4ef6\n    myChart.current.on('mouseover', 'series', (event: any) => {\n      const { seriesType, name } = event;\n      if (seriesType === 'pie') {\n        // \u9f20\u6807\u505c\u7559\u5728\u997c\u56fe\u4e0a\u65f6\uff0c\u89e6\u53d1\u67f1\u72b6\u56fe\u5bf9\u5e94\u6570\u636e\u9879\u7684\u9ad8\u4eae\u6548\u679c\n        myChart.current.dispatchAction({ type: 'highlight', seriesIndex: 0, name });\n      } else if (seriesType === 'bar') {\n        console.log(name);\n        // \u9f20\u6807\u505c\u7559\u5728\u67f1\u72b6\u56fe\u4e0a\u65f6\uff0c\u89e6\u53d1\u997c\u56fe\u5bf9\u5e94\u6570\u636e\u9879\u7684\u9009\u4e2d\u6548\u679c\n        myChart.current.dispatchAction({ type: 'pieSelect', seriesIndex: 1, name });\n      }\n    });\n\n    // \u5728\u67f1\u72b6\u56fe\u4e0a\u76d1\u542c\u9f20\u6807click\u4e8b\u4ef6\n    myChart.current.on('click', 'series.bar', (event: any) => {\n      const { name } = event;\n      // \u67f1\u72b6\u56fe\u4e0a\u53d1\u751f\u70b9\u51fb\u4e8b\u4ef6\u65f6\uff0c\u56fe\u8868\u805a\u7126\u5230\u6570\u636e\u9879\u5bf9\u5e94\u7684\u7ec6\u8282\u6570\u636e\u4e0a\n      const serie = data.find((serie) => serie.name === name);\n      myChart.current.setOption({\n        xAxis: {\n          data: weeks,\n        },\n        series: [\n          { data: serie?.data },\n          { data: serie?.data.map((value, index) => ({ name: weeks[index], value })) },\n        ],\n      });\n    });\n  };\n\n  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;\n};\n\nexport default Action;",m="import React, { useRef, useEffect } from 'react';\nimport echarts, { ECOption } from '../baseEcharts';\n\nconst AreaStyle: React.FC = () => {\n  const myChart = useRef<any>();\n  const containerRef = useRef<any>(null);\n\n  useEffect(() => {\n    initChart();\n  }, []);\n\n  const initChart = () => {\n    myChart.current = echarts.init(containerRef.current);\n    let option: ECOption = {\n      toolbox: {\n        feature: {\n          saveAsImage: {},\n        },\n      },\n      xAxis: {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n      },\n      yAxis: { type: 'value' },\n      series: [\n        {\n          data: [820, 932, 901, 934, 1290, 1330, 1320],\n          type: 'line',\n          areaStyle: {\n            // color: '#666'\n            // \u4f20\u5165\u6e10\u53d8\u5bf9\u8c61\u5b9e\u4f8b\n            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [\n              {\n                offset: 0,\n                color: 'rgb(0, 255, 102)',\n              },\n              {\n                offset: 1,\n                color: 'rgb(0, 102, 102)',\n              },\n            ]),\n            // color: { image: document.getElementById('img'), repeat: 'repeat' },\n          },\n        },\n      ],\n    };\n    myChart.current && myChart.current.setOption(option, true);\n  };\n\n  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;\n};\n\nexport default AreaStyle;",f="import React, { useRef, useEffect } from 'react';\nimport echarts, { ECOption } from '../baseEcharts';\n\nconst Chart: React.FC = () => {\n  const myChart = useRef<any>();\n  const containerRef = useRef<any>(null);\n\n  useEffect(() => {\n    initChart();\n  }, []);\n\n  const initChart = () => {\n    myChart.current = echarts.init(containerRef.current);\n    let dataX = [\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n      'XX\u8857\u9053',\n    ]; //\u540d\u79f0\n    let dataY = [20, 50, 15, 35, 50, 30, 40, 50, 60, 20, 50, 15, 35, 50, 30, 40, 50, 60]; //\u6570\u636e\n    let zoomShow = false;\n    if (dataY.length > 14) {\n      zoomShow = true;\n    } else {\n      zoomShow = false;\n    }\n    let option: ECOption = {\n      backgroundColor: '#0D2753',\n      tooltip: {\n        trigger: 'axis',\n        axisPointer: {\n          type: 'shadow',\n        },\n      },\n      title: {\n        text: '\u6807\u9898',\n      },\n      legend: { show: true, data: ['legend'] },\n      grid: {\n        top: '10%',\n        right: '5%',\n        left: '5%',\n        bottom: '10%',\n      },\n      xAxis: [\n        {\n          type: 'category',\n          data: dataX,\n          axisLine: {\n            lineStyle: {\n              color: 'rgba(66, 192, 255, .3)',\n            },\n          },\n          axisLabel: {\n            interval: 0,\n            margin: 10,\n            color: '#05D5FF',\n            fontSize: 11,\n            rotate: 45,\n          },\n          axisTick: {\n            //\u523b\u5ea6\n            show: false,\n          },\n        },\n      ],\n      yAxis: [\n        {\n          axisLabel: {\n            padding: [3, 0, 0, 0],\n            formatter: '{value}',\n            color: 'rgba(95, 187, 235, 1)',\n            fontSize: 11,\n          },\n          axisTick: {\n            show: true,\n          },\n          axisLine: {\n            lineStyle: {\n              color: 'rgba(66, 192, 255, .3)',\n            },\n          },\n          splitLine: {\n            lineStyle: {\n              color: 'rgba(255,255,255,0)',\n            },\n          },\n        },\n      ],\n      dataZoom: [\n        //\u6eda\u52a8\u6761\n        {\n          show: zoomShow,\n          type: 'slider',\n          realtime: true,\n          startValue: 0,\n          endValue: 14,\n          xAxisIndex: [0],\n          bottom: '10',\n          left: '30',\n          height: 10,\n          borderColor: 'rgba(0,0,0,0)',\n          textStyle: {\n            color: '#05D5FF',\n          },\n        },\n      ],\n      series: [\n        {\n          name: 'legend',\n          type: 'bar',\n          data: dataY,\n          barWidth: '10',\n          color: new echarts.graphic.LinearGradient(\n            0,\n            0,\n            0,\n            1,\n            [\n              {\n                offset: 0,\n                color: 'rgba(5, 213, 255, 1)', // 0% \u5904\u7684\u989c\u8272\n              },\n              {\n                offset: 0.98,\n                color: 'rgba(5, 213, 255, 0)', // 100% \u5904\u7684\u989c\u8272\n              },\n            ],\n            false,\n          ),\n          label: {\n            show: true,\n            lineHeight: 10,\n            formatter: '{c}',\n            position: 'top',\n            color: '#fff',\n            fontSize: 10,\n          },\n        },\n      ],\n    };\n\n    myChart.current && myChart.current.setOption(option, true);\n  };\n\n  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;\n};\n\nexport default Chart;",y="import React, { useRef, useEffect } from 'react';\nimport echarts, { ECOption } from '../baseEcharts';\n\nconst Text: React.FC = () => {\n  const myChart = useRef<any>();\n  const containerRef = useRef<any>(null);\n\n  useEffect(() => {\n    initChart();\n  }, []);\n\n  const initChart = () => {\n    myChart.current = echarts.init(containerRef.current);\n    let option: ECOption = {\n      title: {\n        text: 'test',\n        // \u901a\u8fc7 triggerEvent \u663e\u5f0f\u58f0\u660e\n        // \u8be5\u7ec4\u4ef6\u5c06\u89e6\u53d1\u4e8b\u4ef6\u56de\u8c03\n        triggerEvent: true,\n      },\n      xAxis: {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n        triggerEvent: true,\n      },\n      yAxis: {\n        type: 'value',\n        triggerEvent: true,\n      },\n      series: [\n        {\n          data: [820, 932, 901, 934, 1290, 1330, 1320],\n          type: 'bar',\n        },\n      ],\n    };\n    myChart.current && myChart.current.setOption(option, true);\n    // \u6ce8\u518c `click` \u4e8b\u4ef6\u56de\u8c03\n    myChart.current.on('click', function (e: any) {\n      console.log(`click invoke at ${e.componentType}`);\n    });\n  };\n\n  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;\n};\n\nexport default Text;",C="import React, { useRef, useEffect } from 'react';\nimport echarts, { ECOption } from '../baseEcharts';\n\nconst Demo: React.FC = () => {\n  const myChart = useRef<any>();\n  const containerRef = useRef<any>(null);\n\n  useEffect(() => {\n    initChart();\n  }, []);\n\n  const initChart = () => {\n    myChart.current = echarts.init(containerRef.current);\n    let option: ECOption = {\n      xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },\n      yAxis: { type: 'value', min: 800 },\n      series: [\n        { data: [820, 932, 901, 934, 1290, 1330, 1320], type: 'bar' },\n        { data: [920, 1032, 1001, 1034, 1390, 1430, 1420], type: 'line' },\n      ],\n    };\n    myChart.current && myChart.current.setOption(option, true);\n\n    // \u5728\u6240\u6709 series \u4e0a\u90fd\u89e6\u53d1\n    myChart.current.on('click', 'series', function (e: any) {\n      console.log(`series listener: click invoke at ${e.componentType}.${e.componentSubType}`);\n    });\n\n    // \u53ea\u5728 line \u56fe\u8868\u4e0a\u89e6\u53d1\n    myChart.current.on('click', 'series.line', function (e: any) {\n      console.log(`line listener: click invoke at ${e.componentType}.${e.componentSubType}`);\n    });\n  };\n\n  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;\n};\n\nexport default Demo;",x="import React, { useRef, useEffect } from 'react';\nimport echarts, { ECOption } from '../baseEcharts';\n\nconst Demo2: React.FC = () => {\n  const myChart = useRef<any>();\n  const containerRef = useRef<any>(null);\n\n  useEffect(() => {\n    initChart();\n  }, []);\n\n  const initChart = () => {\n    myChart.current = echarts.init(containerRef.current);\n    let option: ECOption = {\n      // grid: { triggerEvent: true },\n      xAxis: {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n      },\n      yAxis: {\n        type: 'value',\n      },\n      series: [\n        {\n          data: [820, 932, 901, 934, 1290, 1330, 1320],\n          type: 'bar',\n        },\n      ],\n      title: { text: 'test' },\n    };\n    myChart.current && myChart.current.setOption(option, true);\n\n    // \u5728\u6240\u6709 series \u4e0a\u90fd\u89e6\u53d1\n    myChart.current.on('click', { dataIndex: 1 }, (e: any) => {\n      console.log(`click invoke with data index: ${e.dataIndex}`);\n    });\n  };\n\n  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;\n};\n\nexport default Demo2;",b="import React, { useRef, useEffect } from 'react';\nimport echarts, { ECOption } from '../baseEcharts';\n\nconst Line: React.FC = () => {\n  const myChart = useRef<any>();\n  const containerRef = useRef<any>(null);\n\n  useEffect(() => {\n    initChart();\n  }, []);\n\n  const initChart = () => {\n    myChart.current = echarts.init(containerRef.current);\n    let option: ECOption = {\n      xAxis: {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n      },\n      yAxis: {\n        type: 'value',\n      },\n      series: [\n        {\n          data: [150, 230, 224, 218, 135, 147, 260],\n          type: 'line',\n        },\n      ],\n    };\n    myChart.current && myChart.current.setOption(option, true);\n  };\n\n  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;\n};\n\nexport default Line;",v="import React, { useRef, useEffect } from 'react';\nimport echarts, { ECOption } from '../baseEcharts';\n\nconst Line: React.FC = () => {\n  const myChart = useRef<any>();\n  const containerRef = useRef<any>(null);\n\n  useEffect(() => {\n    initChart();\n  }, []);\n\n  function fetchData() {\n    return new Promise((r) => {\n      setTimeout(() => {\n        r([27, 32, 69, 127, 147, 76, 86]);\n      }, 3000);\n    });\n  }\n\n  const initChart = async () => {\n    myChart.current = echarts.init(containerRef.current);\n    myChart.current.showLoading();\n    // 3. \u8c03\u7528\u5f02\u6b65\u63a5\u53e3\u52a0\u8f7d\u6570\u636e\n    const data = (await fetchData()) as number[];\n    let option: ECOption = {\n      xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },\n      yAxis: { type: 'value' },\n      series: [{ type: 'bar', data }],\n    };\n    myChart.current && myChart.current.setOption(option, true);\n    // 5. \u9690\u85cf\u52a0\u8f7d\u52a8\u753b\n    myChart.current.hideLoading();\n  };\n\n  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;\n};\n\nexport default Line;",g="import React, { useRef, useEffect } from 'react';\nimport echarts, { ECOption } from '../baseEcharts';\n\nconst Text: React.FC = () => {\n  const myChart = useRef<any>();\n  const containerRef = useRef<any>(null);\n\n  useEffect(() => {\n    initChart();\n  }, []);\n\n  const initChart = () => {\n    myChart.current = echarts.init(containerRef.current);\n    let option: ECOption = {\n      toolbox: {\n        feature: {\n          saveAsImage: {},\n        },\n      },\n      title: {\n        text: '\u5b57\u4f53\u6d4b\u8bd5\\n\u7b2c\u4e8c\u884c\u6548\u679c',\n        left: '30%',\n        top: '30%',\n        // \u8df3\u8f6c\u5730\u5740\n        link: '/',\n        textStyle: {\n          fontSize: 20,\n          textBorderWidth: 10,\n          //\u6587\u672c\u63cf\u8fb9\u989c\u8272\n          textBorderColor: '#ddd',\n          lineHeight: 40,\n          textShadowColor: '#ccc',\n          textShadowBlur: 8,\n          textShadowOffsetX: 20,\n          textShadowOffsetY: 20,\n        },\n      },\n    };\n    myChart.current && myChart.current.setOption(option, true);\n  };\n\n  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;\n};\n\nexport default Text;",E="import React, { useRef, useEffect } from 'react';\nimport echarts, { ECOption } from '../baseEcharts';\n\nconst Title: React.FC = () => {\n  const myChart = useRef<any>();\n  const containerRef = useRef<any>(null);\n\n  useEffect(() => {\n    initChart();\n  }, []);\n\n  const initChart = () => {\n    myChart.current = echarts.init(containerRef.current);\n    let option: ECOption = {\n      title: {\n        text: '\u6298\u7ebf\u56fe\u5806\u53e0-\u6807\u9898',\n        borderColor: '#ddd',\n        borderWidth: 3,\n        borderRadius: 100,\n        backgroundColor: '#ccc',\n        textStyle: {\n          shadowBlur: 4,\n          shadowColor: '#ddd',\n          shadowOffsetX: 20,\n          shadowOffsetY: 20,\n        },\n      },\n      tooltip: {\n        trigger: 'axis',\n      },\n      legend: {\n        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],\n      },\n      grid: {\n        left: '3%',\n        right: '4%',\n        bottom: '3%',\n        containLabel: true,\n      },\n      toolbox: {\n        feature: {\n          saveAsImage: {},\n        },\n      },\n      xAxis: {\n        type: 'category',\n        boundaryGap: false,\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n      },\n      yAxis: {\n        type: 'value',\n      },\n      series: [\n        {\n          name: 'Email',\n          type: 'line',\n          stack: 'Total',\n          data: [120, 132, 101, 134, 90, 230, 210],\n        },\n        {\n          name: 'Union Ads',\n          type: 'line',\n          stack: 'Total',\n          data: [220, 182, 191, 234, 290, 330, 310],\n        },\n        {\n          name: 'Video Ads',\n          type: 'line',\n          stack: 'Total',\n          data: [150, 232, 201, 154, 190, 330, 410],\n        },\n        {\n          name: 'Direct',\n          type: 'line',\n          stack: 'Total',\n          data: [320, 332, 301, 334, 390, 330, 320],\n        },\n        {\n          name: 'Search Engine',\n          type: 'line',\n          stack: 'Total',\n          data: [820, 932, 901, 934, 1290, 1330, 1320],\n        },\n      ],\n    };\n    myChart.current && myChart.current.setOption(option, true);\n  };\n\n  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;\n};\n\nexport default Title;",R="import React, { useRef, useEffect } from 'react';\nimport echarts, { ECOption } from '../baseEcharts';\n\nconst Title: React.FC = () => {\n  const myChart = useRef<any>();\n  const containerRef = useRef<any>(null);\n\n  useEffect(() => {\n    initChart();\n  }, []);\n\n  const initChart = () => {\n    myChart.current = echarts.init(containerRef.current);\n    let option: ECOption = {\n      title: [\n        { text: 'title 1', top: 10, left: '30%' },\n        { text: 'title 2', top: 40, left: '30%' },\n        { text: 'title 3', top: 70, left: '30%' },\n        { text: 'title 4', top: 100, left: '30%' },\n      ],\n    };\n    myChart.current && myChart.current.setOption(option, true);\n  };\n\n  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;\n};\n\nexport default Title;",O="import React, { useRef, useEffect } from 'react';\nimport echarts, { ECOption } from '../baseEcharts';\n\nconst Title: React.FC = () => {\n  const myChart = useRef<any>();\n  const containerRef = useRef<any>(null);\n\n  useEffect(() => {\n    initChart();\n  }, []);\n\n  const initChart = () => {\n    myChart.current = echarts.init(containerRef.current);\n    let option: ECOption = {\n      xAxis: {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n      },\n      yAxis: { type: 'value' },\n      tooltip: {\n        show: true,\n        trigger: 'item',\n        // \u5b9a\u4e49\u63d0\u793a\u6846\u5185\u5bb9\n        formatter(params:any) {\n          const { seriesName, name, data } = params || {};\n          return `${name}: <br />${seriesName}:${data}`;\n        },\n      },\n      series: [\n        {\n          data: [820, 932, 901, 934, 1290, 1330, 1320],\n          type: 'line',\n          smooth: true,\n        },\n      ],\n    };\n    myChart.current && myChart.current.setOption(option, true);\n  };\n\n  return <div ref={containerRef} style={{ width: 600, height: 400 }}></div>;\n};\n\nexport default Title;",w={"echarts-ui-action":{component:Object(p["dynamic"])({loader:function(){var n=Object(s["a"])(u.a.mark((function n(){return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(2),t.e(17)]).then(t.bind(null,"NriQ"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l},"baseEcharts/index.ts":{import:"../baseEcharts",content:h}},dependencies:{react:{version:"17.0.2"},echarts:{version:"5.3.1"}},componentName:"Action",identifier:"echarts-ui-action"}},"action-demo":{component:Object(p["dynamic"])({loader:function(){var n=Object(s["a"])(u.a.mark((function n(){return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(2),t.e(17)]).then(t.bind(null,"Ay2T"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d},"baseEcharts/index.ts":{import:"../baseEcharts",content:h}},dependencies:{react:{version:"17.0.2"},echarts:{version:"5.3.1"}},componentName:"Action",identifier:"action-demo"}},"echarts-ui-areastyle":{component:Object(p["dynamic"])({loader:function(){var n=Object(s["a"])(u.a.mark((function n(){return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(2),t.e(13)]).then(t.bind(null,"R/WI"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m},"baseEcharts/index.ts":{import:"../baseEcharts",content:h}},dependencies:{react:{version:"17.0.2"},echarts:{version:"5.3.1"}},componentName:"AreaStyle",identifier:"echarts-ui-areastyle"}},"echarts-ui-chart":{component:Object(p["dynamic"])({loader:function(){var n=Object(s["a"])(u.a.mark((function n(){return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(2),t.e(20)]).then(t.bind(null,"pdV7"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:f},"baseEcharts/index.ts":{import:"../baseEcharts",content:h}},dependencies:{react:{version:"17.0.2"},echarts:{version:"5.3.1"}},componentName:"Chart",identifier:"echarts-ui-chart"}},"echarts-ui-events":{component:Object(p["dynamic"])({loader:function(){var n=Object(s["a"])(u.a.mark((function n(){return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(2),t.e(19)]).then(t.bind(null,"0VYM"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:y},"baseEcharts/index.ts":{import:"../baseEcharts",content:h}},dependencies:{react:{version:"17.0.2"},echarts:{version:"5.3.1"}},componentName:"Events",identifier:"echarts-ui-events"}},"events-demo":{component:Object(p["dynamic"])({loader:function(){var n=Object(s["a"])(u.a.mark((function n(){return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(2),t.e(19)]).then(t.bind(null,"KAZN"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:C},"baseEcharts/index.ts":{import:"../baseEcharts",content:h}},dependencies:{react:{version:"17.0.2"},echarts:{version:"5.3.1"}},componentName:"Events",identifier:"events-demo"}},"events-demo2":{component:Object(p["dynamic"])({loader:function(){var n=Object(s["a"])(u.a.mark((function n(){return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(2),t.e(19)]).then(t.bind(null,"bFfy"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:x},"baseEcharts/index.ts":{import:"../baseEcharts",content:h}},dependencies:{react:{version:"17.0.2"},echarts:{version:"5.3.1"}},componentName:"Events",identifier:"events-demo2"}},"echarts-ui-line":{component:Object(p["dynamic"])({loader:function(){var n=Object(s["a"])(u.a.mark((function n(){return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(2),t.e(15)]).then(t.bind(null,"AsDU"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:b},"baseEcharts/index.ts":{import:"../baseEcharts",content:h}},dependencies:{react:{version:"17.0.2"},echarts:{version:"5.3.1"}},componentName:"Line",identifier:"echarts-ui-line"}},"loading-demo":{component:Object(p["dynamic"])({loader:function(){var n=Object(s["a"])(u.a.mark((function n(){return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(2),t.e(16)]).then(t.bind(null,"wzWY"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:v},"baseEcharts/index.ts":{import:"../baseEcharts",content:h}},dependencies:{react:{version:"17.0.2"},echarts:{version:"5.3.1"}},identifier:"loading-demo"}},"echarts-ui-textstyle":{component:Object(p["dynamic"])({loader:function(){var n=Object(s["a"])(u.a.mark((function n(){return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(2),t.e(14)]).then(t.bind(null,"Hiz8"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:g},"baseEcharts/index.ts":{import:"../baseEcharts",content:h}},dependencies:{react:{version:"17.0.2"},echarts:{version:"5.3.1"}},componentName:"TextStyle",identifier:"echarts-ui-textstyle"}},"echarts-ui-title":{component:Object(p["dynamic"])({loader:function(){var n=Object(s["a"])(u.a.mark((function n(){return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(2),t.e(12)]).then(t.bind(null,"dq1E"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:E},"baseEcharts/index.ts":{import:"../baseEcharts",content:h}},dependencies:{react:{version:"17.0.2"},echarts:{version:"5.3.1"}},componentName:"Title",identifier:"echarts-ui-title"}},"title-demo":{component:Object(p["dynamic"])({loader:function(){var n=Object(s["a"])(u.a.mark((function n(){return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(2),t.e(12)]).then(t.bind(null,"ZfBa"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:R},"baseEcharts/index.ts":{import:"../baseEcharts",content:h}},dependencies:{react:{version:"17.0.2"},echarts:{version:"5.3.1"}},componentName:"Title",identifier:"title-demo"}},"echarts-ui-tooltip":{component:Object(p["dynamic"])({loader:function(){var n=Object(s["a"])(u.a.mark((function n(){return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(2),t.e(18)]).then(t.bind(null,"RfXL"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:O},"baseEcharts/index.ts":{import:"../baseEcharts",content:h}},dependencies:{react:{version:"17.0.2"},echarts:{version:"5.3.1"}},componentName:"ToolTip",identifier:"echarts-ui-tooltip"}}},T=t("x2v5"),S=t("KcUY"),X=t.n(S);e["default"]=n=>o.a.createElement(X.a,Object(r["a"])({},n,{config:i,demos:w,apis:T}))},q3YX:function(n){n.exports=JSON.parse('{"menus":{"en-US":{"/components":[{"title":"\u57fa\u7840\u77e5\u8bc6","path":"/components/demo","meta":{"order":1},"children":[{"path":"/components/demo/line","title":"ECharts \u521b\u5efa\u56fe\u8868","meta":{"order":1}},{"path":"/components/demo/chart","title":"ECharts \u7ec4\u6210\u56fe\u8868","meta":{"order":2}},{"path":"/components/demo/text-style","title":"ECharts \u6587\u672c\u6837\u5f0f","meta":{"order":3}},{"path":"/components/demo/area-style","title":"Echarts \u533a\u57df\u6837\u5f0f","meta":{"order":4}},{"path":"/components/demo/events","title":"Echarts \u4e8b\u4ef6\u7cfb\u7edf","meta":{"order":5}},{"path":"/components/demo/action","title":"ECharts action \u4ea4\u4e92","meta":{"order":6}},{"path":"/components/demo/loading","title":"ECharts \u5f02\u6b65\u52a0\u8f7d loading","meta":{"order":7}}]},{"title":"\u56fe\u8868\u7ec4\u4ef6","path":"/components/component","meta":{"order":2},"children":[{"path":"/components/component/title","title":"\u6807\u9898\u7ec4\u4ef6","meta":{"order":1}},{"path":"/components/component/tool-tip","title":"\u63d0\u793a\u6846\u7ec4\u4ef6","meta":{"order":2}}]}],"*":[{"path":"/","title":"Index","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"Components","path":"/components"}]},"title":"echarts-ui","logo":"https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{}}')},x2v5:function(n){n.exports=JSON.parse("{}")}}]);