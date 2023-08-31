import moment from "moment";

// 格式化时间
export const formatTime = (time: undefined | number) => {
  if (time) return moment(time).format("YYYY-MM-DD HH:mm");
};

// 处理 userModel 中的数据，将 statistic 转换为 ColumnPlotDataProps
export const formatColumnPlotData = (
  user: TYPE.User,
): TYPE.ColumnPlotDataProps[] => {
  return Object.entries(user?.statistics).flatMap((item) => {
    const priority = item[0];
    const completed = item[1][0];
    const uncompleted = item[1][1];
    return [
      {
        priority: priority,
        value: uncompleted - completed,
        type: "未完成",
      },
      {
        priority: priority,
        value: completed,
        type: "已完成",
      },
    ];
  });
};

// 处理 userModel 中的数据，将 statistic 转换为 GroupPlotDataProps
export const formatPiePlotData = (user: TYPE.User): TYPE.PiePlotDataProps[] => {
  return Object.entries(user?.statistics).map((item) => ({
    priority: item[0],
    completed: item[1][0],
    uncompleted: item[1][1],
  }));
};

// 将 JSON 数据中的 undefined 字符串转换为 undefined（此时该键值对会消失）
export const JSONformat = (str: string) => {
  return JSON.parse(str, (_, value) => {
    if (value === "undefined") {
      return undefined;
    }
    return value;
  });
};

// 两个字符时中间加空格
export const spaceFont = (text: string) => {
  if (text.length === 2) return `${text[0]} ${text[1]}`;
  return text;
};

// 模拟延迟
export const MockDelay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
