import React from 'react'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import { Form, FormItem, Input } from '@formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

const schema = {
  type: 'object',
  properties: {
    cname: {
      title: '活动名称',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {},
      'x-decorator-props': {},
      required: true,
      'x-index': 0,
    },
    path: {
      title: '任务',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {},
      'x-decorator-props': {},
      required: true,
      'x-index': 1,
    },
    path1: {
      title: '奖品',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {},
      'x-decorator-props': {},
      'x-index': 2,
    },
    path2: {
      title: '收获地址',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {},
      'x-decorator-props': {},
      description: '',
      'x-index': 3,
    },
  },
}

const FormilyForm = () => {
  return (
    <Form form={form} labelCol={6} wrapperCol={10}>
      <SchemaField schema={schema} />
    </Form>
  )
}

export default FormilyForm
