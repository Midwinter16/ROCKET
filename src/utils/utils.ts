import moment from "moment";

// 格式化时间 !bug
export const formatTime = (time: number | undefined) => {
  if (time)
    return time !== "undefined" && moment(time).format("YYYY-MM-DD HH:mm");
};

// 处理 userModel 中的数据，将 statistic 转换为 ColumnPlotDataProps
export const formatColumnPlotData = (
  user: TYPE.User,
): TYPE.ColumnPlotDataProps[] => {
  const list = Object.entries(user?.statistics);
  const res = [] as TYPE.ColumnPlotDataProps[];
  list.forEach((item) => {
    const priority = item[0];
    const completed = item[1][0];
    const uncompleted = item[1][1];
    res.push({
      priority: priority,
      value: uncompleted - completed,
      type: "未完成",
    });
    res.push({
      priority: priority,
      value: completed,
      type: "已完成",
    });
  });
  return res;
};

// 处理 userModel 中的数据，将 statistic 转换为 GroupPlotDataProps
export const formatPiePlotData = (
  user: TYPE.User,
): TYPE.PiePlotDataProps[] => {
  return Object.entries(user?.statistics).map((item) => ({
    priority: item[0],
    completed: item[1][0],
    uncompleted: item[1][1],
  }));
};
