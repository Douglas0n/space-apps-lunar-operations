import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { useTracker } from 'meteor/react-meteor-data';
import React, { useEffect } from "react";
import { UserAddOutlined } from '@ant-design/icons';

const login: React.FC = () => {
  const user = useTracker(() => Meteor.user());

  useEffect(() => { if (user) location.href = '/home' }, [user]);

  const onFinish = (values: any) => {
    const { username, password } = values;
    Meteor.loginWithPassword(username, password, onError);
  };

  const onError = (error: any) => {
    console.error(error);
  };

  return (
    <div>
      <div className='default-header'>
        <Row gutter={24}>
          <Col span={24} style={{ textAlign: 'center' }}>
            <img className='home-logo' height={55} src='https://images.spaceappschallenge.org/images/tBloUSwnTqJFpGa_Jt5kHaukBNU=/9879/width-352/' />
            <h3 className='home-title'>Lunar Surface Operations</h3>
          </Col>
        </Row>
      </div>

      <hr />
      <br />

      <Form
        name="basic"
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 6 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onError}
        autoComplete="off"
      >
        <Form.Item
          style={{ color: 'white' }}
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 9, span: 6 }}>
          <div className='login-form-row'>
            <Checkbox style={{ color: 'white' }} >Remember me</Checkbox>

            <a href='/signup'>
              Create account <UserAddOutlined />
            </a>
          </div>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 9, span: 6 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default login;