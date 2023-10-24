import { drawerProps } from "../../type";
import InputDrawer from "./InputDrawer";

export interface OptionDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  drawerOption: drawerProps;
  setOptions: (options: any) => void;
  setReloadDrawer: (options: any) => void;
}

export default (props: OptionDrawerProps) => ({
  input: <InputDrawer {...props}></InputDrawer>,
});
