---
nav:
  title: Components
  path: /components
group:
  title: 基础知识
  path: /demo
order: 3
---

# ECharts 文本样式

[http://www.imooc.com/wiki/echarts/textstyle.html](http://www.imooc.com/wiki/echarts/textstyle.html) [https://echarts.apache.org/zh/option.html#textStyle](https://echarts.apache.org/zh/option.html#textStyle) [https://echarts.apache.org/zh/option.html#title.textStyle](https://echarts.apache.org/zh/option.html#title.textStyle)

在 ECharts 图表中除了核心的各式各样的图表，剩下的应该就是那些文本文字了，文字的描述也是直接关系到整个图表的意义，文字的样式有同样决定了图表的美观程度，优秀的图表类型选择加上合适的文本样式才能组成最漂亮的图表。这个小节我们就从各个方面去看一下如何对图表中的文本进行美化吧。


## 1. 简介

在 ECharts 的各个组件、图表中，充斥着许多与文本相关的配置，比如 title 组件的 textStyle、subTextStyle 属性； legend 组件的 textStyle 属性；line 图表的 label 属性等等。可以说，但凡与文本有关的功能，都可以参考本文的配置说明。

## 2. 配置项

针对文本项，ECharts 提供了一套通用的配置属性，包含：

| 配置名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| color | string | #333 | 标题文字颜色 |
| fontStyle | string | normal | 标题文字字体风格，可选值： normal、italic、oblique |
| fontWeight | string &#124; number | normal | 标题文字字体粗细度，与 css 的 font-weight 属性类似，可选值：normal、bold、bolder、lighter，或数字 100、 200、 300 等 |
| fontFamily | string | sans-serif | 标题文字字体，与 css 的 font-family 属性类似，可选值：serif、Arial、Microsoft YaHei 等 |
| fontSize | number | 12 | 标题文本大小 |
| lineHeight | number |  | 文本行高 |
| width | number |  | 文本宽度，一般不需要指定 |
| height | number |  | 文本高度，一般不需要指定 |
| textBorderColor | string | transparent | 文本描边颜色，支持如 backgroundColor 颜色值 |
| textBorderWidth | number | 0 | 文本描边宽度 |
| textShadowColor | string | transparent | 文本阴影色 |
| textShadowBlur | number | 0 | 文本阴影长度 |
| textShadowOffsetX | number | 0 | 文本阴影的水平偏移量 |
| textShadowOffsetY | number | 0 | 文本阴影的垂直偏移量 |

## 3.示例

<code src="./index.tsx"></code>
