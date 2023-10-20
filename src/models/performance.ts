import {
  LayoutShift,
  MPerformanceNavigationTiming,
} from "@/pages/wheel/wheels/Performance/type";
import { useEffect, useState } from "react";

export default () => {
  const [data, setData] = useState({});

  // 用户性能指标

  // 累计布局偏移
  const CLSTime = () => {
    new PerformanceObserver((entry) => {
      let clsValue = 0;

      const data = entry.getEntries()[0];
      // console.log("cls", data);

      let sessionValue = 0;
      let sessionEntries: Array<LayoutShift> = [];
      // 摘抄自别人的代码，暂时不知道用意是什么
      if (!data.hadRecentInput) {
        const firstSessionEntry = sessionEntries[0];
        const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

        // 如果条目与上一条目的相隔时间小于 1 秒且
        // 与会话中第一个条目的相隔时间小于 5 秒，那么将条目
        // 包含在当前会话中。否则，开始一个新会话。

        if (
          sessionValue &&
          data.startTime - lastSessionEntry.startTime < 1000 &&
          data.startTime - firstSessionEntry.startTime < 5000
        ) {
          sessionValue += data.value;
          sessionEntries.push(data);
        } else {
          sessionValue = data.value;
          sessionEntries = [data];
        }

        // 如果当前会话值大于当前 CLS 值，
        // 那么更新 CLS 及其相关条目。
        if (sessionValue > clsValue) {
          setData((prev) => {
            return { ...prev, [data.entryType]: sessionValue };
          });
        }
      }
    }).observe({
      type: "layout-shift",
      buffered: true,
    });
  };
  // 首次输入延迟
  const FIDTime = () => {
    new PerformanceObserver((entryList) => {
      const data = entryList.getEntries();
      // console.log("fid", data);
      const entry = data[data.length - 1];
      const delay = entry.processingStart - entry.startTime;
      setData((prev) => ({
        ...prev,
        [entry.entryType]: delay,
      }));
    }).observe({ type: "first-input", buffered: true });
  };
  // 最大内容绘制
  const LCPTime = () => {
    new PerformanceObserver((entryList) => {
      const data = entryList.getEntries();
      // console.log("lcp", data);
      // lcp 可能会有多个，一般是最后一个是加载时间最长的
      data.forEach((item) => {
        setData((prev) => ({
          ...prev,
          [item.entryType]: item.startTime,
        }));
      });
    }).observe({ type: "largest-contentful-paint", buffered: true });
  };
  // 白/灰屏
  const paintTime = () => {
    new PerformanceObserver((entryList) => {
      const data = entryList.getEntries();
      // console.log("paint", data);
      data.forEach((item) => {
        setData((prev) => ({
          ...prev,
          [item.name]: item.startTime,
        }));
      });
    }).observe({ type: "paint", buffered: true });
  };

  // 技术性能指标
  const getNavigationTiming = (): MPerformanceNavigationTiming | undefined => {
    const resolveNavigationTiming = (
      entry: PerformanceNavigationTiming,
    ): MPerformanceNavigationTiming => {
      const {
        domainLookupStart,
        domainLookupEnd,
        connectStart,
        connectEnd,
        secureConnectionStart,
        requestStart,
        responseStart,
        responseEnd,
        domInteractive,
        domContentLoadedEventEnd,
        loadEventStart,
        fetchStart,
      } = entry;

      return {
        // 关键时间点
        FP: responseEnd - fetchStart,
        TTI: domInteractive - fetchStart,
        DomReady: domContentLoadedEventEnd - fetchStart,
        Load: loadEventStart - fetchStart,
        FirstByte: responseStart - domainLookupStart,
        // 关键时间段
        DNS: domainLookupEnd - domainLookupStart,
        TCP: connectEnd - connectStart,
        SSL: secureConnectionStart ? connectEnd - secureConnectionStart : 0,
        TTFB: responseStart - requestStart,
        Trans: responseEnd - responseStart,
        DomParse: domInteractive - responseEnd,
        Res: loadEventStart - domContentLoadedEventEnd,
      };
    };

    const navigation =
      // W3C Level2  PerformanceNavigationTiming
      // 使用了High-Resolution Time，时间精度可以达毫秒的小数点好几位。
      performance.getEntriesByType("navigation").length > 0
        ? performance.getEntriesByType("navigation")[0]
        : performance.timing; // W3C Level1  (目前兼容性高，仍然可使用，未来可能被废弃)。
    // console.log(
    //   "nt",
    //   resolveNavigationTiming(navigation as PerformanceNavigationTiming),
    // );
    setData((prev) => ({
      ...prev,
      ...resolveNavigationTiming(navigation as PerformanceNavigationTiming),
    }));
  };

  useEffect(() => {
    // LCPTime();
    // paintTime();
    // FIDTime();
    // CLSTime();
    getNavigationTiming();
  }, []);

  return { data };
};
