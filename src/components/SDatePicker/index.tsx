import { DatePicker } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";
import weekday from "dayjs/plugin/weekday";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

const SDatePicker = () => {
  const initArray = (range: number) => {
    return new Array(range).fill(0).map((item, index) => index);
  };
  const disabledHour = (day: number) => {
    const currentDay = dayjs().date();
    const currentHour = dayjs().hour();
    if (currentDay === day) {
      return initArray(24).slice(0, currentHour);
    }
    return [];
  };
  const disabledMinute = (day: number, hour: number) => {
    const currentDay = dayjs().date();
    const currentHour = dayjs().hour();
    const currentMinute = dayjs().minute();
    if (currentHour === hour && currentDay === day) {
      return initArray(60).slice(0, currentMinute);
    }
    return [];
  };
  const disabledDateTime = (date) => {
    const day = dayjs(date).date();
    const hour = dayjs(date).hour();
    return {
      disabledHours: () => disabledHour(day),
      disabledMinutes: () => disabledMinute(day, hour),
    };
  };
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current < dayjs().startOf("day");
  };

  return (
    <DatePicker
      showToday
      showTime
      format={"YYYY-MM-DD HH:mm"}
      defaultValue={dayjs()}
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      allowClear={false}
      // 情景：当切换到未来日期，选择的时间是放在今天中为更早的时间，如现在是 18:00，切换到未来日期后选择 10:00 再切回当前日期，可以点击确认按钮。理论上要禁用按钮
      // PS：为什么 onchange 是点击确认后的回调而不是改变时间的回调？🤨
    />
  );
};

export default SDatePicker;
