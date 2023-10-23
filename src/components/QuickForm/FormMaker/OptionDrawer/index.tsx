import { Drawer, Form, Input, InputNumber, Radio, Typography } from "antd";
import { useEffect } from "react";
import { componentMapping } from "../..";
import { typeMapping } from "../../constants";
import { drawerProps } from "../../type";
import IconSelector from "../components/IconSelector";
import { IconFont } from "../components/IconSelector/constants";
import SelectMaker from "../components/SelectMaker";
import SelectMold from "../components/SelectMaker/SelectMold";
import { py } from "../utils";
import { radioOptions } from "./constant";
import styles from "./index.less";

interface OptionDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  drawerOption: drawerProps;
}

const OptionDrawer: React.FC<OptionDrawerProps> = ({
  open,
  setOpen,
  drawerOption,
}) => {
  const { props } = drawerOption;
  const initialForm = {
    name: py(props.name),
    cname: props.name,
    prefix: "none",
    prefixContent: undefined,
    suffix: "none",
    suffixContent: undefined,
    limit: 0,
    tips: "",
  };
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(initialForm);
  }, [props]);

  const watchList = {
    prefix: Form.useWatch("prefix", form),
    prefixContent: Form.useWatch("prefixContent", form),
    suffix: Form.useWatch("suffix", form),
    suffixContent: Form.useWatch("suffixContent", form),
    limit: Form.useWatch("limit", form),
    cname: Form.useWatch("cname", form),
  };

  const addonBeforeRender = (value: any, type: "suffix" | "prefix") => {
    if (watchList[type] === "text") return value;
    if (watchList[type] === "select" && value)
      return <SelectMold value={value}></SelectMold>;
    return undefined;
  };

  const title = typeMapping.find(
    (item) => item.value === props.selected,
  )?.label;
  return (
    <Drawer
      title={"配置"}
      onClose={() => setOpen(false)}
      open={open}
      size="large"
      destroyOnClose={true}
    >
      {/* 后续使用 QuickForm 替代 */}
      <Form form={form} labelCol={{ span: 4 }}>
        <Typography.Title level={5} className={styles.title}>
          {`预览`}
        </Typography.Title>
        <Form.Item label={watchList.cname}>
          {componentMapping({
            type: "input",
            props: {
              prefix: watchList.prefix === "icon" && (
                <IconFont type={`icon-${watchList.prefixContent}`}></IconFont>
              ),
              addonBefore: addonBeforeRender(watchList.prefixContent, "prefix"),
              suffix: watchList.suffix === "icon" && (
                <IconFont type={`icon-${watchList.suffixContent}`}></IconFont>
              ),
              addonAfter: addonBeforeRender(watchList.suffixContent, "suffix"),
              showCount: !!watchList.limit,
              maxLength: !!watchList.limit && watchList.limit,
            },
          })}
        </Form.Item>
        <Typography.Title level={5} className={styles.title}>
          {`表单项属性`}
        </Typography.Title>
        <Form.Item label="中文名称" name="cname">
          <Input></Input>
        </Form.Item>
        <Form.Item label="英文名称" name="name">
          <Input></Input>
        </Form.Item>
        <Form.Item label="提示文字" name="tips">
          <Input placeholder="请输入提示语言"></Input>
        </Form.Item>
        <Typography.Title level={5} className={styles.title}>
          {`${title}属性`}
        </Typography.Title>
        <Form.Item label={`前缀`} name="prefix">
          <Radio.Group
            onChange={() => {
              form.setFieldValue("prefixContent", undefined);
            }}
            defaultValue="none"
          >
            {radioOptions.map((item) => (
              <Radio key={item.value} value={item.value}>
                {item.name}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
        {watchList.prefix === "icon" && (
          <Form.Item label={`前缀内容`} name="prefixContent">
            <IconSelector></IconSelector>
          </Form.Item>
        )}
        {watchList.prefix === "text" && (
          <Form.Item label={`前缀内容`} name="prefixContent">
            <Input></Input>
          </Form.Item>
        )}
        {watchList.prefix === "select" && (
          <Form.Item
            tooltip={
              watchList.prefix === "select" &&
              "请输入中文，并以换行符作为间隔符号"
            }
            label={`前缀内容`}
            name="prefixContent"
          >
            <SelectMaker preview={false}></SelectMaker>
          </Form.Item>
        )}
        <Form.Item label={`后缀`} name="suffix">
          <Radio.Group defaultValue="none">
            {radioOptions.map((item) => (
              <Radio key={item.value} value={item.value}>
                {item.name}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
        {watchList.suffix === "icon" && (
          <Form.Item label={`后缀内容`} name="suffixContent">
            <IconSelector></IconSelector>
          </Form.Item>
        )}
        {watchList.suffix === "text" && (
          <Form.Item label={`后缀内容`} name="suffixContent">
            <Input></Input>
          </Form.Item>
        )}
        {watchList.suffix === "select" && (
          <Form.Item
            tooltip="请输入中文，并以换行符作为间隔符号"
            label={`后缀内容`}
            name="suffixContent"
          >
            <SelectMaker></SelectMaker>
          </Form.Item>
        )}
        <Form.Item
          tooltip="0 为不限制字数，此选项会自动添加字数验证规则"
          label="字数限制"
          name="limit"
        >
          <InputNumber min={0}></InputNumber>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default OptionDrawer;
