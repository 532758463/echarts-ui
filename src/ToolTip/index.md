---
nav:
  title: Components
  path: /components
group:
  title: 图表组件
  path: /component
  order: 2
order: 2
---

# 提示框组件

在我们的图表旁边一般都看不到大量的文字内容展示，大量的文字展示不仅会影响美观性，而且还容易破坏图表的内容布局。那当我们要展示某一个点的数据信息时又该如何做呢？不用担心，ECharts 已经帮我们准备好了，让我们在不影响整体简洁图表的美观性，又能看到某一处的相信数据信息。下面我们一起去了解一下 ECharts 中提示框是如何使用的吧。

## 1. 简介

> [官方定义](https://echarts.apache.org/zh/option.html#tooltip)：提示框组件。

提示框指当鼠标悬停在图表的某点或坐标轴的某个值上时，以浮层形式展示该点数据信息的组件

tooltip 组件使用范围较大，首先可以在图表的多个层级配置：

- 实例层级；
- 坐标系层级，支持： [grid.tooltip](https://echarts.apache.org/zh/option.html#grid.tooltip)、[polar.tooltip](https://echarts.apache.org/zh/option.html#polar.tooltip)、[single.tooltip](https://echarts.apache.org/zh/option.html#singleAxis.tooltip)；
- 系列层级，例如 [series-bar.tooltip](https://echarts.apache.org/zh/option.html#series-bar.tooltip)，ECharts 所有图表均支持提示框，且配置项相同；
- 系列数据项层级，例如 [series-bar.data.tooltip](https://echarts.apache.org/zh/option.html#series-bar.data.tooltip)。同样的，所有图表数据项均支持提示框。
  > **Tips**： ECharts 会沿配置链路逐级向上 merge，计算出最终作用在数据项上的配置值。

其次，部分辅助组件也支持 tooltip 功能，包括：

- [legend](https://echarts.apache.org/zh/option.html#legend.tooltip)
- [toolbox](https://echarts.apache.org/zh/option.html#toolbox.tooltip)

## 2. 实例解析

tooltip 支持的配置项在 [官网](https://echarts.apache.org/zh/option.html#tooltip) 上有详细罗列，此处不赘述。本文将更多关注提示框组件常规的用例场景，以实例方式展示使用方法。

### 2.1 配置语法

启动 tooltip 组件，最简单的方法是在实例级别上配置 tooltip 属性，例如：

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Echarts Example</title>
  </head>

  <body>
    <div id="main" style="width: 600px;height: 400px"></div>

    <script src="https://cdn.jsdelivr.net/npm/echarts@5.3.1/dist/echarts.min.js"></script>
    <script type="text/javascript">
      const myChart = echarts.init(document.getElementById('main'));

      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: { type: 'value' },
        tooltip: { show: true },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
          },
        ],
      };
      myChart.setOption(option);
    </script>
  </body>
</html>
```

### 2.2 改变触发类型

图表上的 tooltip 默认触发类型为 item，即鼠标悬停在数据项上时触发，且提示框紧跟在数据项附近。可通过 [trigger](https://echarts.apache.org/zh/option.html#tooltip.trigger) 属性修改触发方式，支持如下值：

- item：默认值，当鼠标悬停在数据项上时触发；
- axis：当鼠标悬停在坐标轴上时触发；
- none：鼠标操作及 action 均不触发提示框。
  > **Tips**：axis 模式在直角坐标系、极坐标系下的所有图表均有效，且可以通过 [tooltip.axisPointer.axis](https://echarts.apache.org/zh/option.html#tooltip.axisPointer.axis) 属性指定触发的坐标轴。其他坐标系图表只能支持 item 或 none 触发。

### 2.3 改变触发条件

默认情况下，tooltip 在鼠标悬停时触发，可以通过 tooltip.triggerOn 配置项修改触发条件，接受如下值：

- **mousemove**：默认值，鼠标悬停在数据项/组件上时触发；
- **click**：鼠标点击时触发；
- **none**：鼠标交互不触发显示。

当 tooltip.triggerOn 值为 none 时，可通过 [Action 交互](https://www.imooc.com/wiki/echarts/action.html) 接口控制提示框：

- 使用[tooltip.showTip ](https://echarts.apache.org/zh/api.html#action.tooltip.showTip)显示提示框，用法：

```typescript
dispatchAction({
  type: 'showTip',
  // 屏幕上的 x 坐标
  x: number,
  // 屏幕上的 y 坐标
  y: number,
  // 本次显示 tooltip 的位置。只在本次 action 中生效。
  // 缺省则使用 option 中定义的 tooltip 位置。
  position: number[] | string | Function,
})
```

- 使用 [tooltip.hideTip](https://echarts.apache.org/zh/api.html#action.tooltip.hideTip)隐藏提示框，用法：

```typescript
dispatchAction({
  type: 'hideTip',
});
```

> **Tips**： tooltip.showTip 行为是鼠标交互的替换方式，效果与鼠标触发一模一样，这背后有两层含义，一是无论调用多少次，当前只会有一个提示框被激活。例如上例中并没有调用 tooltip.hideTip 行为，当每次 tooltip.showTip 之后都会自动把前一个提示框隐藏掉。二是，接口触发与鼠标交互触发相互冲突

### 2.4 控制提示框内容

tooltip 组件的核心作用是展示数据项相关的信息，提示内容可以通过 tooltip.formatter 项进行配置。tooltip.formatter 接受模板字符串、模板函数两种类型的值：

#### 2.4.1 使用模板字符串定制提示框内容

[https://echarts.apache.org/zh/option.html#tooltip.formatter](https://echarts.apache.org/zh/option.html#tooltip.formatter)

模板字符串行人如 {a}: {c}其中 {}为 echarts 提供的模板变量，不同图表所提供的变量集合不同，但通常有：

- **a**：表示系列名；
- **b**：表示数据名；
- **c**：表示数据值。

模板字符串支持传入 html 标签，这在 tooltip.renderModel = html 时会被渲染为标准的 DOM 结构

> **Tips**：模板字符串存在一些明显的缺陷：
>
> 1. 功能单一，只实现了变量替换功能，格式化时只能沿用 echarts 所提供的变量集合，不能做进一步计算，即使是很简单的百分比格式化也无法实现；
> 1. 变量的类型、数量、顺序与 tooltip 所在位置强相关，模板与图表强耦合，若实际应用中变更了图表类型，可能导致模板失效；
> 1. 变量名均为 a、b、c 等没有语义的字符，这在某种程度上增加了记忆强度；
> 1. 格式化文本在不同渲染模式下可能渲染出不同的效果
>
> 模板字符串实现的非常鸡肋，无法承担较复杂的格式化需求，建议尽量使用模板函数方式。

当图表上有多个数据序列，传入的变量名会出现有点变化，例如 ：

- **a0**：a 代表**系列名**，0 代表系列下标，根据传入的系列数量还会有 a1a2 等；
- **b0**：b 代表数据名，0 位系列下标；
- **c0**：c 代表数据值，0 代表系列下标。

#### 2.4.2 使用模板函数定制提示框内容

[https://echarts.apache.org/zh/option.html#tooltip.formatter](https://echarts.apache.org/zh/option.html#tooltip.formatter) tooltip.formatter 还支持传入函数值，签名形如：

```typescript
(params: Object|Array, ticket: string, callback: (ticket: string, html: string)) => string | HTMLElement | HTMLElement[]
```

支持返回 HTML 字符串或者创建的 DOM 实例。第一个参数 params 是 formatter 需要的数据集。格式如下：

```typescript
{
    componentType: 'series',
    // 系列类型
    seriesType: string,
    // 系列在传入的 option.series 中的 index
    seriesIndex: number,
    // 系列名称
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: Object,
    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）
    value: number|Array|Object,
    // 坐标轴 encode 映射信息，
    // key 为坐标轴（如 'x' 'y' 'radius' 'angle' 等）
    // value 必然为数组，不会为 null/undefied，表示 dimension index 。
    // 其内容如：
    // {
    //     x: [2] // dimension index 为 2 的数据映射到 x 轴
    //     y: [0] // dimension index 为 0 的数据映射到 y 轴
    // }
    encode: Object,
    // 维度名列表
    dimensionNames: Array<String>,
    // 数据的维度 index，如 0 或 1 或 2 ...
    // 仅在雷达图中使用。
    dimensionIndex: number,
    // 数据图形的颜色
    color: string,
    // 饼图，漏斗图的百分比
    percent: number
}
```

### 2.5 控制提示框渲染方式

与提示框渲染方式有关的配置项包括：

| 配置名     | 类型   | 默认值 | 说明                              |
| ---------- | ------ | ------ | --------------------------------- |
| renderMode | string | html   | 指定渲染模式，支持 html、richText |

|

extraCssText |

string | | 附加在提示浮层的样式，仅当 renderMode = html 时有效 |

## 3. 例子

<code src="./index.tsx"></code>
