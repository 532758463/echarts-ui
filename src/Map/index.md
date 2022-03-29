---
nav:
  title: Components
  path: /components
group:
  title: 图表组件
  path: /component
  order: 4
order: 4
---

# 地图组件

echarts. registerMap

```ts
(
    mapName: string,
    opt: {
        geoJSON: Object | string;
        specialAreas?: Object;
    }
)
| (
    mapName: string,
    opt: {
        svg: Object | string;
    }
)
| (
    mapName: string,
    geoJSON: Object | string,
    specialAreas?: Object
)
```

注册可用的地图，只在 geo 组件或者 map 图表类型中使用。

使用方法见 option.geo。

参数：

- mapName

地图名称，在 geo 组件或者 map 图表类型中设置的 map 对应的就是该值。

- opt

  - geoJSON 可选。GeoJson 格式的数据，具体格式见 https://geojson.org/ 。可以是 JSON 字符串，也可以是解析得到的对象。这个参数也可以写为 geoJson，效果相同。

  - svg 可选。从 v5.1.0 开始支持 SVG 格式的数据。可以是字符串，也可以是解析得到的 SVG DOM 对象。更多信息参见 SVG 底图。

  - specialAreas 可选。将地图中的部分区域缩放到合适的位置，可以使得整个地图的显示更加好看。只在 geoJSON 中生效，svg 中不生效。

<code src='./index.tsx'></code>

https://echarts.apache.org/zh/api.html#echarts.registerMap
