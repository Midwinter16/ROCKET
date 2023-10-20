export enum metricsName {
  FP = "first-paint", // 首次渲染（白屏时间）页面视觉首次发生变化的时间点
  FCP = "first-contentful-paint", // 首次内容渲染（灰屏时间）首次绘制任何文本、图像、非空白canvas或者SVG的时间点
  LCP = "largest-contentful-paint", // 最大绘制（视觉延迟）
  FID = "first-input-delay", // 首次输入延迟（加载速度）
  CLS = "cumulative-layout-shift", // 累计布局偏移（交互延迟）
  NT = "navigation-timing", // 导航时间
  RF = "resource-flow", // 资源流
}

export interface IMetrics {
  [prop: string | number]: any;
}

export interface PerformanceEntryHandler {
  (entry: any): void;
}

export interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export interface MPerformanceNavigationTiming {
  FP?: number;
  TTI?: number;
  DomReady?: number;
  Load?: number;
  FirstByte?: number;
  DNS?: number;
  TCP?: number;
  SSL?: number;
  TTFB?: number;
  Trans?: number;
  DomParse?: number;
  Res?: number;
}
