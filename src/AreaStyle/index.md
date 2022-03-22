---
nav:
  title: Components
  path: /components
group:
  title: 基础知识
  path: /demo
order: 4
---
# Echarts 区域样式

## 1. 简介
在 ECharts 中，图表、组件最终会被渲染成线段、多边形、文本的集合，多边形在不同组件中虽然被赋予不同的语义，但它们都有相似的表现方法，ECharts 为此提供了一套通用的配置属性集合，称之为区域样式 —— **areaStyle**。

areaStyle 基类定义在 [src/model/mixin/areaStyle.js](https://github.com/apache/incubator-echarts/blob/master/src/model/mixin/areaStyle.js) 文件中，其他组件继承扩展，例如 [series-line.areaStyle](https://echarts.apache.org/zh/option.html#series-line.areaStyle)、[radar.splitArea.areaStyle](https://echarts.apache.org/zh/option.html#radar.splitArea.areaStyle)、[xAxis.splitArea](https://echarts.apache.org/zh/option.html#xAxis.splitArea) 等。本文不对具体组件中的定义做过多说明，而侧重于 areaStyle 对象通用的基础功能。

## 2. 配置项
areaStyle 的通用属性包括：

| 配置名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| color | string&#124;array&#124;object |  | 区域背景色，支持色值、数组、渐变配置对象 |
| shadowBlur | number | 0 | 指定区域阴影模糊值大小，需要设置 show 为 true，且 color 不为 transparent 才能生效 |
| shadowColor | string |  | 阴影颜色值，默认为组件的 color 值 |
| shadowOffsetX | number | 0 | 阴影的水平偏移量 |
| shadowOffsetY | number | 0 | 阴影的垂直偏移量 |
| opacity | number | 1 | 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形 |

## 3.示例

<code src="./index.tsx"></code>


