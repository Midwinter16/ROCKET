/**
 * 组件类型
 */
export type ComponentType =
  | "input"
  | "password"
  | "checkbox"
  | "text"
  | "select"
  | "mulselect"
  | "number"
  | "switch"
  | "slider"
  | "radio"
  | "rate"
  | "upload"
  | "dragupload"
  | "color"
  | "date"
  | "rangedate"
  | "time"
  | "textarea"
  | "cascader";

/**
 * 表单项
 */
interface itemProps {
  label: string;
  name: string;
  [str: string]: any;
}

/**
 * 表单项组件属性
 * type：组件类型
 * props：组件属性
 * children：组件内容
 */
export interface ComponentProps {
  type: ComponentType;
  props?: any;
  children?: any; // opt：可能是文本可能是对象，后续补齐
}

/**
 * 输入的表单属性
 * key：唯一 key 值，后面弄一个自动生成
 * itemProps：表单项属性
 * conponentProps：表单项组件属性
 */
export interface FormProps {
  key: string;
  itemProps: itemProps;
  componentProps: ComponentProps;
}

/**
 * 配置表单类型
 * key：唯一 key 值，后面弄一个自动生成
 * name：对应Form.Item 的 name
 * selected：表单项组件类型
 */
export interface OptionProps {
  key: string;
  name: string;
  selected: undefined | ComponentType;
}

/**
 * 抽屉配置类型
 * key：唯一 key 值，后面弄一个自动生成
 * type：表单项组件类型
 */
export interface drawerProps {
  props: OptionProps;
  type: ComponentType | undefined;
}
