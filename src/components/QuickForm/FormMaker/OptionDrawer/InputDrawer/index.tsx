/**
 * 输入框详细配置抽屉
 * author：cmt
 * 概念定义
 * 可传输属性对象：即可以通过 JSON.parse & JSON.stringfy 转换后不改变的属性对象
 * 可解析属性对象：即可以通过直接调用 ComponentMapping 方法生成对应组件的属性对象
 * 有上述两个属性对象的原因是因为在开发过程中发现某些情况下无法将其转为字符串进行传输（因为最终的效果是生成字符串然后丢进 ComponentMapping 生成表单）
 * 例如 Input 中的 prefix 可以是 ReactElement，但是 ReactElement 是 Symbol 对象（不太确定）导致解析时转换前后不一致
 * 所以需要两个函数，第一个是将详细配置表单转换为可传输属性对象 transformFn，第二个是将可传输属性对象转换为可解析属性对象 parseFn
 * 每个表单项组件大类都有自己不同的 transformFn & parseFn，以针对不同属性的组件
 */
import { componentMapping } from "@/components/QuickForm";
import {
  Button,
  Drawer,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Switch,
  Typography,
} from "antd";
import { delay } from "lodash";
import { useEffect, useState } from "react";
import { OptionDrawerProps } from "..";
import IconSelector from "../../components/IconSelector";
import SelectMaker from "../../components/SelectMaker";
import { py } from "../../utils";
import { InputType, radioOptions, typeOption } from "./constant";
import styles from "./index.less";
import { parseFn, transformFn } from "./utils";

const InputDrawer: React.FC<OptionDrawerProps> = ({
  open,
  setOpen,
  drawerOption,
  setReloadDrawer,
}) => {
  const { props } = drawerOption;

  // 初始化表单数据
  const initialForm = {
    name: py(props.name),
    cname: props.name,
    prefix: "none",
    prefixContent: undefined,
    suffix: "none",
    suffixContent: undefined,
    limit: 0,
    tooltip: undefined,
    placeholder: undefined,
    type: props.selected,
    min: 0,
    max: 100,
    autoSize: false,
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    // props 初始化/改变时设置初始值
    form.setFieldsValue(initialForm);
  }, [props]);

  // watchList 除了可以实时监听表单变化，还可以在表单变化时重新渲染，达到实时预览的目的，所以尽管下面的某些监听对象没有使用，但是为了实时预览也要进行监听
  const watchList = {
    prefix: Form.useWatch("prefix", form),
    suffix: Form.useWatch("suffix", form),
    prefixContent: Form.useWatch("prefixContent", form),
    suffixContent: Form.useWatch("suffixContent", form),
    limit: Form.useWatch("limit", form),
    tooltip: Form.useWatch("tooltip", form),
    placeholder: Form.useWatch("placeholder", form),
    name: Form.useWatch("name", form),
    cname: Form.useWatch("cname", form),
    type: Form.useWatch("type", form),
    min: Form.useWatch("min", form),
    max: Form.useWatch("max", form),
    autoSize: Form.useWatch("autoSize", form),
  };

  // 表单项列表映射
  const optionMapping = {
    prefix: (
      <>
        <Form.Item label={`前缀`} name="prefix">
          <Radio.Group
            onChange={() => {
              form.setFieldValue("prefixContent", undefined);
            }}
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
            <SelectMaker></SelectMaker>
          </Form.Item>
        )}
      </>
    ),
    suffix: (
      <>
        {" "}
        <Form.Item label={`后缀`} name="suffix">
          <Radio.Group>
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
      </>
    ),
    limit: (
      <Form.Item
        tooltip="0 为不限制字数，此选项会自动添加字数验证规则"
        label="字数限制"
        name="limit"
      >
        <InputNumber min={0}></InputNumber>
      </Form.Item>
    ),
    placeholder: (
      <Form.Item tooltip="placeholder" label="占位符" name="placeholder">
        <Input placeholder="请输入占位符信息"></Input>
      </Form.Item>
    ),
    min: (
      <Form.Item label="最小值" name="min">
        <InputNumber></InputNumber>
      </Form.Item>
    ),
    max: (
      <Form.Item label="最大值" name="max">
        <InputNumber></InputNumber>
      </Form.Item>
    ),
    autoSize: (
      <Form.Item label="自适应尺寸" name="autoSize">
        <Switch></Switch>
      </Form.Item>
    ),
  };

  // 关闭 drawer
  const closeDrawer = () => {
    setModalOpen(false);
    setOpen(false);
    delay(() => setReloadDrawer(false), 300);
  };

  // 保存
  const submit = () => {
    closeDrawer();
  };

  return (
    <Drawer
      title={"配置"}
      onClose={() =>
        form.isFieldsTouched() ? setModalOpen(true) : setOpen(false)
      }
      open={open}
      size="large"
      destroyOnClose={true}
      extra={<Button onClick={submit}>保存</Button>}
    >
      {/* 后续使用 QuickForm 替代 */}
      <Form form={form} labelCol={{ span: 4 }}>
        {/* 预览 */}
        <Typography.Title level={5} className={styles.title}>
          预览
        </Typography.Title>
        {[parseFn(transformFn(form))].map((item) => (
          <Form.Item key={item.key} {...item.itemProps} name="preview">
            {componentMapping(item.componentProps)}
          </Form.Item>
        ))}

        {/* 表单项属性 */}
        <Typography.Title level={5} className={styles.title}>
          {`表单项属性`}
        </Typography.Title>
        <Form.Item label="中文名称" name="cname">
          <Input></Input>
        </Form.Item>
        <Form.Item label="英文名称" name="name">
          <Input></Input>
        </Form.Item>
        <Form.Item label="提示文字" name="tooltip">
          <Input placeholder="请输入提示语言"></Input>
        </Form.Item>

        {/* 输入框属性 */}
        <Typography.Title level={5} className={styles.title}>
          {`输入框属性`}
        </Typography.Title>
        <Form.Item label={`输入框类型`} name="type">
          <Radio.Group
            onChange={() => {
              // 改变输入框类型时重置 preview 内容
              form.setFieldValue("preview", "");
            }}
          >
            {InputType.map((item) => (
              <Radio key={item.value} value={item.value}>
                {item.name}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
        {watchList.type &&
          typeOption[watchList.type].map((item: string) => {
            return optionMapping[item];
          })}
      </Form>
      <Modal
        title="关闭确认"
        open={modalOpen}
        onOk={() => closeDrawer()}
        onCancel={() => setModalOpen(false)}
      >
        <p>表单未保存，是否要退出</p>
      </Modal>
    </Drawer>
  );
};

export default InputDrawer;
