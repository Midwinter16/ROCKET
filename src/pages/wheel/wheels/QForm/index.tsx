import QuickForm from "@/components/QuickForm";
import FormMaker from "@/components/QuickForm/FormMaker";
import { FormProps } from "@/components/QuickForm/type";
import { Tabs } from "antd";
import { useState } from "react";

const QForm = () => {
  const [formOptions, setFormOptions] = useState<FormProps[]>([]);
  const tabsItems = [
    {
      key: "1",
      label: "FormMaker",
      children: <FormMaker setFormOptions={setFormOptions}></FormMaker>,
    },
    {
      key: "2",
      label: "QuickForm",
      children: <QuickForm formOptions={formOptions}></QuickForm>,
    },
  ];
  return <Tabs defaultActiveKey="1" items={tabsItems} />;
};

export default QForm;
