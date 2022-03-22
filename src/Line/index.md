---
nav:
  title: Components
  path: /components
group:
  title: 基础知识
  path: /demo
order: 1
---

## ECharts 创建图表

## 1. 简介

ECharts 用法非常简单，定义图表的基本流程是实例化 echarts 后，调用 setOption 传入配置对象，ECharts 根据配置对象的描述渲染各类图表、组件。本节主要讲解初始配置图表的基本流程，以及实例化后动态更新图表内容的方法。

## 2. 创建图表
### 2.1 创建图表的步骤
通常，创建一个 ECharts 图表需要执行如下步骤：

1. 定义 DOM 节点作为图表的容器；
1. 调用 echarts.init 方法实例化 ECharts 对象；
1. 调用 echartInstance.setOption 方法传入图表配置。

<code src="./index.tsx"></code>

#### 2.1.2 echarts.init 接口
echarts.init 函数用于创建 ECharts 对象，不能在同一个容器上多次调用，函数签名：
```typescript
(dom?: HTMLDivElement|HTMLCanvasElement, theme?: Object|string, opts?: {
 devicePixelRatio?: number,
 renderer?: string,
 useDirtyRect?: boolean, // 从 `5.0.0` 开始支持
 ssr?: boolean,          // 从 `5.3.0` 开始支持
 width?: number|string,
 height?: number|string,
 locale?: string         // 从 `5.0.0` 开始支持
}) => ECharts
```
创建一个 ECharts 实例，返回 [echartsInstance](https://echarts.apache.org/zh/api.html#echartsInstance)，不能在单个容器上初始化多个 ECharts 实例。

init 参数详解：
[https://echarts.apache.org/zh/api.html#echarts.init](https://echarts.apache.org/zh/api.html#echarts.init)

#### 2.1.3 echartInstance.setOption 接口
实例化 ECharts 对象后，需调用 echartInstance.setOption 接口传入图表配置，接口签名：
```typescript
(option: Object, notMerge?: boolean, lazyUpdate?: boolean)
or
(option: Object, opts?: {
    notMerge?: boolean;
    replaceMerge?: string | string[];
    lazyUpdate?: boolean;
})
```

- option: ECOption图表的配置项和数据，具体见[配置项手册](https://echarts.apache.org/zh/option.html)。
- opts
   - notMerge 可选。是否不跟之前设置的 option 进行合并。默认为 false。即表示合并。合并的规则，详见 **组件合并模式**。如果为 true，表示所有组件都会被删除，然后根据新 option 创建所有新组件。
   - replaceMerge 可选。用户可以在这里指定一个或多个组件，如：xAxis, series，这些指定的组件会进行 "replaceMerge"。如果用户想删除部分组件，也可使用 "replaceMerge"。详见 **组件合并模式**。
   - lazyUpdate 可选。在设置完 option 后是否不立即更新图表，默认为 false，即同步立即更新。如果为 true，则会在下一个 animation frame 中，才更新图表。
   - silent 可选。阻止调用 setOption 时抛出事件，默认为 false，即抛出事件。


### 2.2 配置对象概述

ECharts 是配置驱动的图表框架，主要功能都以配置对象形式声明，某种程度上可以说 ECharts 的应用都是围绕配置对象展开的。配置对象结构如下：
[https://echarts.apache.org/zh/option.html#title](https://echarts.apache.org/zh/option.html#title)
```typescript
{
		title: object,
		legend: object,
		grid: object,
		xAxis: object,
		yAxis: object,
		polar: object,
		radiusAxis: object,
		angleAxis: object,
		radar: object,
		dataZoom: array,
		visualMap: array,
		tooltip: object,
		axisPointer: object,
		toolbox: object,
		brush: object,
		geo: object,
		parallel: object,
		parallelAxis: object,
		singleAxis: object,
		timeline: object,
		graphic: object,
		calendar: object,
		dataset: object,
		aria: object,
		series: array,
		color: array,
		backgroundColor: string,
		textStyle: object,
		animation: boolean,
		animationThreshold: number,
		animationDuration: number,
		animationEasing: string,
		animationDelay: number,
		animationDurationUpdate: number,
		animationEasingUpdate: string,
		animationDelayUpdate: number,
		blendMode: string,
		hoverLayerThreshold: number,
		useUTC: boolean,
}

```
ECharts 的使用方法绝大部分都围绕着这些属性展开。根据配置作用，可以将上述属性划分为以下几类：

1. **图表配置**，对应 series 项。该属性接受一个数组值，每个数组项对应一个图表，数组项至少需要提供 type 属性用于指定图表类型；
1. **组件配置**，包括 title、radar、toolbox 等项。ECharts 将图表的常见的各项元素按功能组织为组件形式，组件与图表通常是松耦合的，可以应用到多个图表上；
1. **基础配置**，包括 textStyle、color、animation 等项。用以设定实例的基本运行逻辑。

#### 2.2.1 图表配置
ECharts 的图表由 series 数组指定。series 数组项接受对象形式，每个数组项对应一个图表，数组项通过 type 声明图表类型；通过 data 数组声明图表数据序列。比如：
```typescript
series: [
	{
		data: [820, 932, 901, 934, 1290, 1330, 1320],
		type: 'bar',
	},
	{
		data: [620, 1032, 401, 624, 690, 730, 1420],
		type: 'line',
	},
],
```
[http://www.imooc.com/wiki/echarts/echartsinit.html](http://www.imooc.com/wiki/echarts/echartsinit.html)

#### 2.2.2 组件配置
ECharts 组件大致可分为：

1. 坐标系与坐标轴组件，这类组件直接参与到图表定位、渲染过程中，包括 grid、xAxis、radar、calendar、polar 等；
1. 信息增强组件，用以传达关于图表的更多信息，包括title、tooltip、axisPointer；
1. 交互增强组件，为使用者提供改变图表视图的交互能力，包括 toolbox、legend、visualMap、dataZoom、brush、timeline。
> **Tips**：部分组件不能单独使用，需要与关联组件同时配置才能生效，比如 grid + xAxis + yAxis 组合用于配置直角坐标系；polar + angleAxis + radiusAxis 组合用于配置极坐标系。
