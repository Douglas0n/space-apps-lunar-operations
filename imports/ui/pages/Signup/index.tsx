import { Button, Col, Form, Input, Row } from "antd";
import React from "react";

const signup: React.FC = () => {

    const onFinish = (values: any) => {
        const { user } = values;

        Accounts.createUser(
            { ...user, profile: { name: user.name } },
            onError);

        location.href = "/";
    };

    const onError = (error: any) => {
        console.error(error);
    };

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
        },
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

            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['user', 'name']} label="Full Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name={['user', 'username']} label="Username" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name={['user', 'password']} label="Password" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <br/>
                    <br/>

                    <a href="/"> &#60;&#60; Back</a>
                </Form.Item>
            </Form>
        </div>
    );
};

export default signup;