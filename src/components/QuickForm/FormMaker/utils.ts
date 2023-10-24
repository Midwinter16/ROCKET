import { pinyin } from "pinyin-pro";

export const py = (str: string) => {
  const res = pinyin(str, { toneType: "none", type: "array" });
  return res.join("");
};

// 模拟随机字符串
export const uuid = (): string => {
  return (+new Date()).toString();
};
