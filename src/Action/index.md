---
nav:
  title: Components
  path: /components
group:
  title: 基础知识
  path: /demo
order: 6
---

# ECharts action 交互

## 1. 简介

> [官方解释：](https://www.echartsjs.com/zh/api.html#action) ECharts 中支持的图表行为，通过 dispatchAction 触发。

action 交互系统允许开发者通过编程方式向 ECharts 实例传递行为消息，实例中的组件会对接收到的消息做出响应，按照消息参数更新组件的视觉状态。action 系统与事件系统都被设计为消息的传播机制，不同的是事件是从实例组件向应用层，自下而上传递消息，描述用户在组件发生的交互行为；action 消息方向相反，从应用层到组件自上而下传递，描述开发者希望如何改变组件的状态。

> Tips：action 通常会触发对应类型的事件，例如 legend.legendSelect 对应 legendselected 事件；dataZoom.dataZoom 对应 dataZoom 事件；visualMap.selectDataRange 对应 datarangeselected 事件。

## 2. 用法

action 通过 [echartInstance.dispatchAction](https://echarts.apache.org/zh/api.html#echartsInstance.dispatchAction) 接口分发，接口签名：

```typescript
(payload: object) => void
```

payload 参数是对 action 的描述，包含 type 属性用于声明行为类型，及其他随机属性用于声明行为参数，例如：

```typescript
echartInstance.dispatchAction({
  // 激活提示框 tooltip
  type: 'showTip',
  // 指定提示框所在序列下标
  seriesIndex: 0,
  // 指定提示框所在数据下标
  dataIndex: 1,
  // 指定提示框位置
  position: 'top',
});
```

ECharts 支持的完整行为列表可参考 [官网](https://echarts.apache.org/zh/api.html#action)，下面准备了一个动态切换图表高亮态的样例，以展示 action 的常规用法。

## 3. 图表高亮示例

默认地，当鼠标悬停在图表上时，相应的数据项会切换进一种所谓的“高亮”状态，通过变换数据项的颜色、文本、边框、透明度等效果，形成视觉上的突出效果。ECharts 提供了 [highlight](https://www.echartsjs.com/zh/api.html#action.highlight) 行为用以触发图表的高亮效果；提供了 [downplay](https://www.echartsjs.com/zh/api.html#action.downplay) 行为用以取消高亮效果。两者接受相同参数：

```typescript
dispatchAction({
  // highlight 或 downplay
  type: 'downplay',
  // 可选，系列 index，可以是一个数组指定多个系列
  seriesIndex: number | Array,
  // 可选，系列名称，可以是一个数组指定多个系列
  seriesName: string | Array,
  // 可选，数据的 index
  dataIndex: number,
  // 可选，数据的 名称
  name: string,
});
```

例子：

<code src="./index.tsx"></code>

![](https://cdn.nlark.com/yuque/0/2022/gif/1030681/1647763135572-818a1d66-1ee7-4baa-bc85-f27449b5b158.gif#clientId=u94a0bbf8-cf22-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u8f3c73c5&margin=%5Bobject%20Object%5D&originHeight=704&originWidth=1134&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u508cea4d-2c4a-4144-ae2f-2ff684398d3&title=)

> **Tips**：所有图表都支持高亮状态，高亮时的样式效果通常使用 emphasis 项进行配置，例如 [series-bar.emphasis](https://www.echartsjs.com/zh/option.html#series-bar.emphasis.itemStyle)；[series-radar.emphasis](https://www.echartsjs.com/zh/option.html#series-radar.emphasis)；[series-tree.emphasis](https://www.echartsjs.com/zh/option.html#series-tree.emphasis)。

## 4. 与事件系统联动

事件系统与行为系统有千丝万缕的内在关系，两者组合使用可实现多图表联动效果，例如实例：

<code src="./demo.tsx"></code>


`seriesIndex图表索引`

实例定义了一个柱状图、一个饼图，两者通过 action 与事件系统实现联动交互效果。交互之一是通过监听鼠标 hover 事件，分发对应图表的高亮 action，核心代码：

```typescript
// 监听鼠标hover事件
myChart.on('mouseover', 'series', (event) => {
  const { seriesType, name } = event;
  if (seriesType === 'pie') {
    // 鼠标停留在饼图上时，触发柱状图对应数据项的高亮效果
    myChart.dispatchAction({ type: 'highlight', seriesIndex: 0, name });
  } else if (seriesType === 'bar') {
    // 鼠标停留在柱状图上时，触发饼图对应数据项的选中效果
    myChart.dispatchAction({ type: 'pieSelect', seriesIndex: 1, name });
  }
});
```

![](https://cdn.nlark.com/yuque/0/2022/gif/1030681/1647763870199-c06138f9-4c65-46ce-8cd4-edc0d5cc99c9.gif#clientId=u94a0bbf8-cf22-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u7a7a8805&margin=%5Bobject%20Object%5D&originHeight=718&originWidth=1734&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u87724f9c-72da-4046-846d-708cc03d617&title=)

另一个交互效果，是鼠标点击柱状图时，展开数据项的详情数据，核心代码：

```typescript
// 在柱状图上监听鼠标click事件
myChart.on('click', 'series.bar', (event) => {
  const { name } = event;
  // 柱状图上发生点击事件时，图表聚焦到数据项对应的细节数据上
  const serie = data.find((serie) => serie.name === name);
  myChart.setOption({
    xAxis: {
      data: weeks,
    },
    series: [
      { data: serie.data },
      { data: serie.data.map((value, index) => ({ name: weeks[index], value })) },
    ],
  });
});
```

常用的动作和动作对应参数在 [action](https://echarts.apache.org//api.html#action) 文档中有列出。

![](https://cdn.nlark.com/yuque/0/2022/gif/1030681/1647763972741-50fb0b8a-3647-4784-bcc4-949e8400de59.gif#clientId=u94a0bbf8-cf22-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u6703d240&margin=%5Bobject%20Object%5D&originHeight=718&originWidth=1734&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ud6b62752-b085-49cf-9af2-f3892ff1e6a&title=)

> **Tips**：灵活使用行为系统与事件系统，能够在组件的基础能力之外实现更多更丰富的交互功能，这是高阶开发者必备技能之一。
