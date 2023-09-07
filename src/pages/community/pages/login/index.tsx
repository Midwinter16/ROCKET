import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styles from "./index.less";

const Login = () => {
  const onFinish = (values: any) => {
    console.log("完成表格: ", values);
  };

  return (
    <div className={styles["login-container"]}>
      <Form
        name="normal_login"
        className={`"login-form", ${styles["login-card"]}`}
        initialValues={{ remember: true }}
        onFinish={onFinish}
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
            <Checkbox>记住密码</Checkbox>
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
          >
            登录
          </Button>
          或 <a href="#">现在注册</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
