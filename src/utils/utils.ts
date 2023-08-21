import moment from "moment";

export const formatTime = (time: number | undefined) =>
  time && moment(time).format("YYYY-MM-DD HH:mm");
