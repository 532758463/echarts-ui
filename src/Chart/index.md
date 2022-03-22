---
nav:
  title: Components
  path: /components
group:
  title: 基础知识
  path: /demo
order: 2
---
## ECharts 组成图表


![](https://cdn.nlark.com/yuque/0/2022/png/1030681/1647742582931-92d001f7-a797-4302-8101-964a26febc59.png#clientId=u291b5c6c-b31a-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u8faaf493&margin=%5Bobject%20Object%5D&originHeight=918&originWidth=1886&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u8bcaa688-2f82-491c-a4d6-3f967181fb6&title=)

## 1. 简介

为了更好地应用 ECharts 做可视化开发，有必要在深入学习前对图表的组成做一次简单的总览。完整的 ECharts 图表包含如下部分：
![](https://cdn.nlark.com/yuque/0/2022/png/1030681/1647742465363-ca225b66-8f2d-43d4-8829-4be5fc9c2d4f.png?x-oss-process=image%2Fresize%2Cw_1215%2Climit_0)


<code src="./index.tsx"></code>

### 1.1 标题 title

title 组件用于渲染图表的标题，含主标题、副标题两部分。 title 组件支持配置位置、文本样式、链接模式等。

### 1.2 提示框 tooltip

当鼠标悬停在图表的某点或坐标轴的某个值上时，以浮层方式展示该点数据信息的组件。提示框内提示的信息还可以通过格式化函数动态指定

### 1.3 图例 legend

图例是图表的辅助视觉引导组件，用以解释说明图表中各数据序列的含义及图表中数据的筛选。

### 1.4 工具栏 toolbox

图表操作工具栏，内置导出图片、数据视图、动态图表类型切换、数据区域缩放、重置五种工具，但不支持自定义扩展，

### 1.5 视觉映射 visualMap

视觉映射组件可将图表数据投影到视觉通道上，例如通过连续变化的颜色反应图表的数值变化。visualMap 组件还支持用户选定指定范围的数据进行展示。

### 1.6 时间线 timeline

timeline 组件提供了一种在多个 option 间连续切换，重新渲染图表视图的能力。通常用在图表基本配置不变，但图表数据持续变动的场景。

### 1.7 数据范围 dataZoom

dataZoom 组件用于实现图表区域缩放功能，让用户能够自由聚焦在某片数据区域，又或是概览全局数据。dataZoom 组件分内置型、滑动条型、框选型三种。

## 2. 坐标系组件

除上述通用组件外，ECharts 还划分出一系列组件用于声明坐标系的特征属性。坐标系组件与图表关系密切，部分图表需要有特定的坐标系作为容器才能正常渲染，ECharts 目前支持如下坐标系：

1. 直角坐标系，通过 grid、xAxis、yAxis 组件实现。
1. 极坐标系，通过 polar、angleAxis、radiusAxis 组件实现。
1. 地图坐标系，通过 geo 组件实现。
1. 平行坐标系，通过 parallelAxis、parallel 组件实现。
1. 日历坐标系，通过 calendar 组件实现。
1. 雷达坐标系，通过 radar 组件实现。
