import * as echarts from 'echarts/core';
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
  PieChart,
  PieSeriesOption,
  ScatterChart,
  ScatterSeriesOption,
  MapSeriesOption,
  MapChart,
} from 'echarts/charts';
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
  ToolboxComponent,
  ToolboxComponentOption,
  LegendComponent,
  DataZoomComponent,
  DataZoomComponentOption,
  PolarComponent,
  PolarComponentOption,
  VisualMapComponent,
  GeoComponent,
  VisualMapComponentOption,
  GeoComponentOption,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers';
import { XAXisOption, YAXisOption } from 'echarts/types/dist/shared';
// import { EChartsOption } from 'echarts/types/dist/shared';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | XAXisOption
  | YAXisOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LineSeriesOption
  | DataZoomComponentOption
  | PieSeriesOption
  | PolarComponentOption
  | ScatterSeriesOption
  | VisualMapComponentOption
  | GeoComponentOption
  | ToolboxComponentOption
  | MapSeriesOption
>;
// export type ECOption = EChartsOption;
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LineChart,
  SVGRenderer,
  PieChart,
  ToolboxComponent,
  LegendComponent,
  DataZoomComponent,
  PolarComponent,
  ScatterChart,
  VisualMapComponent,
  GeoComponent,
  MapChart,
]);

export default echarts;
