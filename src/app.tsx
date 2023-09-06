// 运行时配置
import "@/components/Tracer"; // 点击行为跟踪
import { LoginOutlined } from "@ant-design/icons";
import { ConfigProvider, Dropdown } from "antd";
import "swiper/css";
import rocket from "./assets/rocket.svg";

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: "@umijs/max" };
}

export const layout = () => {
  return {
    logo: <img src={rocket} />,
    title: "ROCKET FLY",
    menu: {
      locale: false,
    },
    layout: "mix",
    avatarProps: {
      size: "large",
      src: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      title: "user",
      render: (props, dom) => {
        return (
          <Dropdown
            menu={{
              items: [
                {
                  key: "logout",
                  icon: <LoginOutlined />,
                  label: "退出登录",
                },
              ],
            }}
          >
            {dom}
          </Dropdown>
        );
      },
    },
    token: {
      pageContainer: {
        paddingBlockPageContainerContent: 10,
        paddingInlinePageContainerContent: 20,
        colorBgPageContainer: "#f1f3f5",
      },
    },
    childrenRender: (children: any) => {
      return (
        <ConfigProvider input={{ autoComplete: "off" }}>
          {children}
        </ConfigProvider>
      );
    },
  };
};
