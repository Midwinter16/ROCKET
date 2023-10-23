import { pinyin } from "pinyin-pro";

export const py = (str: string) => {
  const res = pinyin(str, { toneType: "none", type: "array" });
  return res.join("");
};
