import './App.css'
import AntdForm from './AntdForm'
import FormilyForm from './FormilyForm'
import { Row, Col } from 'antd'

function App() {
  return (
    <Row gutter={16} className="main">
      <Col span={12}>
        <div className="title">antd form</div>
        <AntdForm />
      </Col>
      <Col span={12}>
        <div className="title">formily form</div>
        <FormilyForm />
      </Col>
    </Row>
  )
}

export default App
