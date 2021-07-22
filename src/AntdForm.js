import React from 'react'

import { Form, Input } from 'antd'

const AntdForm = () => {
  return (
    <Form>
      <Form.Item label="任务名称">
        <Input />
      </Form.Item>
      <Form.Item label="镜像仓库地址">
        <Input />
      </Form.Item>
      <Form.Item label="Dockerfile 路径">
        <Input />
      </Form.Item>
      <Form.Item label="Context Path">
        <Input />
      </Form.Item>
    </Form>
  )
}

export default AntdForm
