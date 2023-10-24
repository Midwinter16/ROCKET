import { FormProps } from "@/components/QuickForm/type";
import { IconFont } from "../../components/IconSelector/constants";
import SelectMold from "../../components/SelectMaker/SelectMold";
import { uuid } from "../../utils";

// 转换函数（表单属性 -> 可传输属性对象）
export const transformFn = (form: any): FormProps => {
  const {
    prefix,
    prefixContent,
    suffix,
    suffixContent,
    limit,
    tooltip,
    cname,
    name,
    placeholder,
    type,
    min,
    max,
    autoSize,
  } = form.getFieldsValue();
  const transformObject = {
    key: uuid(),
    itemProps: {
      label: cname,
      name,
      tooltip,
    },
    componentProps: {
      type,
      props: {
        prefix: prefix === "icon" && {
          name: "prefix",
          type: "icon",
          props: { type: `icon-${prefixContent}` },
        },
        addonBefore:
          prefix === "select"
            ? {
                name: "addonBefore",
                type: "select",
                props: { options: prefixContent },
              }
            : prefix === "text" && prefixContent,
        suffix: suffix === "icon" && {
          name: "suffix",
          type: "icon",
          props: { type: `icon-${suffixContent}` },
        },
        addonAfter:
          suffix === "select"
            ? {
                name: "addonAfter",
                type: "select",
                props: { options: suffixContent },
              }
            : suffix === "text" && suffixContent,
        showCount: !!limit,
        maxLength: !!limit && limit,
        placeholder,
        autoSize,
        min,
        max,
      },
    },
  };
  return transformObject;
};

// 解析函数（可传输属性对象 -> 可解析属性对象）
export const parseFn = (transformObject: FormProps): FormProps => {
  // 需要解析的属性列表
  const parseList = ["prefix", "suffix", "addonBefore", "addonAfter"];
  const res = parseList.reduce((obj, item) => {
    const temp = transformObject.componentProps.props[item];
    if (temp) {
      switch (temp.type) {
        case "icon":
          return {
            ...obj,
            [item]: <IconFont {...temp.props}></IconFont>,
          };
        case "select":
          return {
            ...obj,
            [item]: <SelectMold {...temp.props}></SelectMold>,
          };
        // default 的情况对应 text，因为 text 时只有字符串，如果后续有别的属性要留意这里
        default:
          return {
            ...obj,
            [item]: temp,
          };
      }
    }
    return { ...obj };
  }, {});
  transformObject.componentProps.props = {
    ...transformObject.componentProps.props,
    ...res,
  };
  return transformObject;
};
