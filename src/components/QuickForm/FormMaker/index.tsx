import { CloseOutlined, EditOutlined, RedoOutlined } from "@ant-design/icons";
import { Button, Cascader, Input, Space, message } from "antd";
import { last } from "lodash";

import { useState } from "react";
import { componentMapping } from "..";
import { selectOptions } from "../constants";
import { ComponentType, FormProps, OptionProps, drawerProps } from "../type";
import OptionDrawerFn from "./OptionDrawer";
import { parseFn } from "./OptionDrawer/InputDrawer/utils";
import { py, uuid } from "./utils";

interface FormMakerProps {
  setFormOptions: (option: FormProps[]) => void;
}

const FormMaker: React.FC<FormMakerProps> = (props) => {
  const { setFormOptions } = props;
  const [options, setOptions] = useState<OptionProps[]>([
    { key: "1", selected: "input", name: "用户名" },
  ]);
  const [transformData, setTransformData] = useState<FormProps>();
  const [open, setOpen] = useState(false);
  // reloadDrawer 用于重新渲染 Drawer
  const [reloadDrawer, setReloadDrawer] = useState(false);
  const [drawerOption, setDrawerOption] = useState<drawerProps>({
    props: {
      key: "1",
      selected: "input",
      name: "用户名",
    },
    type: "input",
  });

  /**
   * 删除表单项
   * @param key
   * @returns
   */
  const deleteOption = (key: string) =>
    setOptions((prev) => prev.filter((item) => item.key !== key));

  /**
   * 选择/重置表单项组件
   * @param key
   * @returns
   */
  const selectedOption = (key: string, e?: ComponentType[]) =>
    setOptions((prev) =>
      prev.map((item) => {
        if (item.key === key) {
          return {
            ...item,
            selected: e ? last(e) : undefined,
          };
        }
        return item;
      }),
    );

  /**
   * 选择/重置表单项组件
   * @param key
   * @returns
   */
  const changeOption = (key: string, e: string) =>
    setOptions((prev) =>
      prev.map((item) => {
        if (item.key === key) {
          return {
            ...item,
            name: e,
          };
        }
        return item;
      }),
    );

  /**
   * 格式化为 FormProps
   */
  const format = (list: OptionProps[]) => {
    const res = list.map((item) => {
      return {
        key: item.key.toString(),
        itemProps: {
          label: item.name,
          name: py(item.name), // 转为拼音或使用翻译转为英文
        },
        componentProps: {
          type: item.selected as ComponentType,
        },
      };
    });
    setFormOptions(res);
  };

  /**
   * 提交最终的表单数据
   */
  const submit = () => {
    const data = options.filter((item) => item.selected);
    format(data);
    setOptions([]);
    message.info("提交成功，可以到 QuickForm Tabs 中查看");
  };

  return (
    <>
      <Button
        type="dashed"
        onClick={() =>
          setOptions((prev) => [
            ...prev,
            { key: uuid(), name: "", selected: undefined },
          ])
        }
      >
        添加字段
      </Button>
      <Button type="primary" onClick={submit}>
        提交
      </Button>
      <Space size={100} style={{ display: "block" }} direction="vertical">
        {options.map((item) => (
          <Space style={{ margin: "10px 0 0 0" }} key={item.key}>
            <Input
              defaultValue={item.name}
              placeholder="标签名称"
              onChange={(e) => changeOption(item.key, e.target.value)}
            ></Input>
            :
            {!item.selected ? (
              <Cascader
                expandTrigger="hover"
                options={selectOptions}
                onChange={(e) => selectedOption(item.key, e)}
              ></Cascader>
            ) : transformData ? (
              [parseFn(transformData)].map((item) =>
                componentMapping(item.componentProps),
              )
            ) : (
              componentMapping({
                type: item.selected,
              })
            )}
            {/* 操作栏 */}
            {item.selected && (
              <>
                <Button
                  icon={
                    <EditOutlined
                      style={{ color: "blue", cursor: "pointer" }}
                    />
                  }
                  onClick={() => {
                    setDrawerOption({
                      props: {
                        key: uuid(),
                        selected: item.selected,
                        name: item.name,
                      },
                      type: item.selected,
                    });
                    setOpen(true);
                    setReloadDrawer(true);
                  }}
                >
                  配置
                </Button>
                <Button
                  icon={
                    <RedoOutlined
                      style={{ color: "blue", cursor: "pointer" }}
                    />
                  }
                  onClick={() => selectedOption(item.key)}
                >
                  重选
                </Button>
              </>
            )}
            <Button
              icon={
                <CloseOutlined style={{ color: "red", cursor: "pointer" }} />
              }
              onClick={() => deleteOption(item.key)}
              danger
            >
              删除
            </Button>
          </Space>
        ))}
      </Space>
      {reloadDrawer &&
        OptionDrawerFn({
          drawerOption,
          open,
          setOpen,
          setOptions,
          setReloadDrawer,
        })["input"]}
    </>
  );
};

export default FormMaker;
