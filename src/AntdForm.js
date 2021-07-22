import React from 'react'

import { Form, Input } from 'antd'

const AntdForm = () => {
  return (
    <Form>
      <Form.Item label="活动名称">
        <Input />
      </Form.Item>
      <Form.Item label="任务">
        <Input />
      </Form.Item>
      <Form.Item label="奖品">
        <Input />
      </Form.Item>
      <Form.Item label="收货地址">
        <Input />
      </Form.Item>
    </Form>
  )
}

export default AntdForm
