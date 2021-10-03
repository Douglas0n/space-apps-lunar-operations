import { Button, Card, Descriptions, Form, Input, Select, Space, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import React from "react";

const form: React.FC = () => {
    const { Option } = Select;

    const onFinish = (values: any) => Meteor.call('pushLog', values);

    return <>
        <Card className='forms'>
            <Descriptions title="New Update" />

            <Form
                layout="vertical"
                onFinish={onFinish} >

                <Space style={{ display: 'flex', marginBottom: 8 }} align="baseline">

                    <Form.Item name='description' label="Description" style={{ width: 250 }} required>
                        <Input placeholder="Log Description" />
                    </Form.Item>

                    <Form.Item name='type' label="Topic" required>
                        <Select style={{ width: 150 }} placeholder='Select Topic'>
                            <Option value='text' >Transcript</Option>
                            <Option value='photo' >Photography</Option>
                            <Option value='audio' >Audio</Option>
                        </Select>
                    </Form.Item>

                </Space>
                <Space style={{ display: 'flex', marginBottom: 8 }} align="baseline">

                    <Form.Item name='text' label="Transcription" style={{ width: 250 }}>
                        <Input.TextArea disabled={true} rows={3} placeholder="Log content" />
                    </Form.Item>

                    <Form.Item label="Attachment">
                        <Upload disabled={true}>
                            <Button type='dashed' style={{ width: 150 }} disabled={true} icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </Form.Item>

                </Space>

                <Form.Item>
                    <Button type="primary" htmlType='submit' >Submit Log</Button>
                </Form.Item>
            </Form>
        </Card >
    </>;
};

export default form;

