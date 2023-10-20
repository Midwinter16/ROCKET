import QuickForm from "@/components/QuickForm";
import FormMaker from "@/components/QuickForm/FormMaker";
import { FormProps } from "@/components/QuickForm/type";
import { Tabs } from "antd";

const formOptions: FormProps[] = [
  {
    key: "1",
    itemProps: {
      label: "用户名",
      name: "username",
    },
    componentProps: {
      type: "input",
    },
  },
  {
    key: "2",
    itemProps: {
      label: "密码",
      name: "password",
    },
    componentProps: {
      type: "password",
    },
  },
];

const tabsItems = [
  {
    key: "1",
    label: "FormMaker",
    children: <FormMaker></FormMaker>,
  },
  {
    key: "2",
    label: "QuickForm",
    children: <QuickForm formOptions={formOptions}></QuickForm>,
  },
];

const QForm = () => {
  return <Tabs defaultActiveKey="1" items={tabsItems} />;
};

export default QForm;
