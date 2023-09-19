import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { history, useModel } from "@umijs/max";
import rocket from "@icons/rocket.svg";
import { Avatar, Button, Card, Checkbox, Form, Input, message } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { useState } from "react";
import styles from "./index.less";
import { HeaderBannerList } from "@/pages/community/constants";

const Login = () => {
  const [remember, setRemember] = useState(false);
  const { isLogin, setIsLogin } = useModel("community.user");

  const rememberChange = (e: CheckboxChangeEvent) => {
    setRemember(e.target.checked);
  };

  const login = () => {
    console.log(remember);
  };

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi
      .loading({
        content: "加载中",
        duration: 1,
        style: {
          marginTop: "10vh",
        },
      })
      .then(() =>
        messageApi.success({
          content: "登录成功",
          duration: 2,
          style: {
            marginTop: "10vh",
          },
        }),
      ).then(() => setIsLogin(true));
  };

  const error = () => {
    messageApi.error({
      content: "登录失败，请检查账号或者密码是否正确",
      duration: 2,
      style: {
        marginTop: "10vh",
      },
    });
  };

  const goTo = (value: string) => {
    history.push(`/community/${value}`);
  };

  return (
    <div className={isLogin ? styles["route-container"] : styles["login-container"]}>
      {contextHolder}
      {isLogin ? (
        <>
          <div className={styles["route-list-container"]}>
            <div className={styles["route-list-header"]}>
              <Avatar
                shape="square"
                src={rocket}
                className={styles["logo"]}
              ></Avatar>
              <div className={styles["title"]}>
                <h1>ROCKET FLY</h1>
              </div>
            </div>
            <div className={styles["route-title"]}>选择要进入的服务</div>
            <div className={styles["route-list"]}>
              {HeaderBannerList.map((item) => (
                <Button className={styles["route-list-item"]} key={item.value} onClick={() => goTo(item.value)}>
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
          <div className={styles["route-card"]}></div>
        </>
      ) : (
        <Card className={styles["login-card"]}>
          <div className={styles["card-header"]}>
            <Avatar
              shape="square"
              src={rocket}
              className={styles["logo"]}
            ></Avatar>
            <div className={styles["title"]}>
              <h1>ROCKET FLY</h1>
            </div>
          </div>
          <Form
            name="normal_login"
            className={styles["login-form"]}
            initialValues={{ remember }}
            onFinish={success}
            onFinishFailed={error}
          >
            <Form.Item
              name="用户名"
              rules={[{ required: true, message: "用户名不能为空" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "密码不能为空" }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox onChange={rememberChange}>记住密码</Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="#">
                忘记密码
              </a>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={login}
              >
                登录
              </Button>
              或 <a href="#">现在注册</a>
            </Form.Item>
          </Form>
        </Card>
      )}
    </div>
  );
};

export default Login;
