import React, { Component } from 'react';
import '../assets/scss/contact.scss';
import {
    Form,
    Input, Button,
} from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
const { TextArea } = Input;


export default class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <div className='d1'>
                    <span>&#10100;</span>
                    <br />
                    <a href='www.gmail.com'><MailOutlined />&nbsp;&nbsp;   gouravanand8799@gmail.com</a>
                    <br />
                    <a href='tel:9380572693'><PhoneOutlined />&nbsp;&nbsp;   +91 9380572693</a>
                    <br />
                    <span>&#10101;</span>
                </div>
                <div class="vl"></div>
                <div className='d2'>
                    <>
                    <h4>Query/Message</h4>
                        <Form
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout="horizontal"
                            style={{
                                maxWidth: 600,
                            }}
                        >
                            <Form.Item label="Name">
                                <Input />
                            </Form.Item>
                            <Form.Item label="E-mail">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Mobile">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Remark">
                                <TextArea rows={2} cols={2} />
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Send
                                </Button>
                            </Form.Item>
                        </Form>
                    </>
                </div>
            </div>
        )
    }
}


