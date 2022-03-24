---
nav:
  title: Components
  path: /components
group:
  title: 基础知识
  path: /demo
order: 7
---

# ECharts 异步加载 loading

## 1. 简介

很多时候图表的数据是通过异步加载方式获得的，在 ECharts 中可以使用 jQuery、axios、fetch 等任何熟悉的工具先加载数据，再调用 setOption 渲染图表，例如：

```typescript
const ecInstance = echarts.init(document.getElementById('main'));
const data = await axios.get('data/source');
ecInstance.setOption({
  title: ...,
  series: [
    {type:'xxx', data:data}
  ]
});

```

## 2. 使用加载动画

上例的问题是从 init 到 setOption 这段时间内，图表容器没有内容，一片空白，可能会让用户误解为 bug，因此需要给容器加上 loading 效果以提示用户正在加载数据。echarts 内置了一套简单的加载动画效果，通过 [echartInstance.showLoading](https://echarts.apache.org//zh/api.html#echartsInstance.showLoading) 方法触发；通过 [echartInstance.hideLoading](https://echarts.apache.org/zh/api.html#echartsInstance.hideLoading) 方法关闭，例如：

<code src="./demo.tsx"></code>

![](https://cdn.nlark.com/yuque/0/2022/gif/1030681/1647765487993-e7d2b06c-6203-46e8-99f0-c44459702710.gif#clientId=uec4c94de-ff55-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u329a670e&margin=%5Bobject%20Object%5D&originHeight=342&originWidth=541&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue28120d9-9d63-4948-9776-e6ce69cce80&title=)

[echartInstance.showLoading](https://echarts.apache.org/zh/api.html#echartsInstance.showLoading) 函数签名如下：

```typescript
(type?: string, opts?: Object) => void
```

参数：

- type：可选，加载动画类型，目前只支持 ‘default’；
- opts：可选，加载动画配置项，默认配置项：

```typescript
{
  text: 'loading',
  color: '#c23531',
  textColor: '#000',
  maskColor: 'rgba(255, 255, 255, 0.8)',
  zlevel: 0
}

```

> 提示： echarts 目前只提供了一种加载动画样式，而且没有对外暴露加载动画的扩展接口。如果应用场景要求使用自定义动画，可以自行实现，在图表容器上覆盖一层遮罩层，并在遮罩层上叠加加载动画效果。

## 3. 图表预配置

对于异步数据场景，也可以在数据完成加载前预先提供图表的基本配置信息，例如：

```typescript
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Echarts Example</title>
</head>

<body>
    <div id="main" style="width: 600px; height: 400px;"></div>

    <script src="https://cdn.jsdelivr.net/npm/axios@0.26.1/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.3.1/dist/echarts.min.js"></script>
    <script type="text/javascript">
        function fetchData() {
            return new Promise((r) => {
                setTimeout(() => {
                    r([27, 32, 69, 127, 147, 76, 86]);
                }, 3000);
            });
        }
        const myChart = echarts.init(document.getElementById('main'));

        const option = {
            xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
            yAxis: { type: 'value' },
            series: [{ type: 'bar' }],
        };
        // 提前提供基本配置
        myChart.setOption(option);

        (async () => {
            const data = await fetchData();

            const option = {
                series: [{ data: data }],
            };
            // 数据加载完毕后再提供数据配置
            myChart.setOption(option);
        })();
    </script>
</body>

</html>
```

![](https://cdn.nlark.com/yuque/0/2022/gif/1030681/1647765702869-a8d5bf57-2375-4549-a664-9df473650ac5.gif#clientId=uec4c94de-ff55-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u222375de&margin=%5Bobject%20Object%5D&originHeight=692&originWidth=1160&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uea55b211-a2b0-4b62-98e2-e52290a413c&title=)

> **Tips**：预设配置信息并不能带来性能上的提升，因为每次调用 setOption 都会重绘所有组件、图表。预设的作为纯粹只是在数据来临之前提供一个基本线框图，提示用户即将到来什么样的信息内容。
