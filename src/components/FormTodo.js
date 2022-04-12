import { Input, Button, Col, Row, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './style.css';
import List from './List';
import { FormHook } from '../hooks/form';

const FormTodo = () => {
  const {
    handleChange,
    onFinish,
    onError,
    deleteuser,
    task,
    tasks
  } = FormHook()

  return (
    <div>
      <Row>
        <Col span={12}>
          <Form 
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onError}
            autoComplete="off"
          >
            <Form.Item
              name="task"
              rules={[{ required: true, message: 'Ingresa tu nombre de usuario!' }]}
            >
              <Input 
                name="task" 
                size="large" 
                placeholder="Username" 
                prefix={<UserOutlined />}
                onChange={handleChange}
                value={task}
              />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <List tasks={tasks} deleteuser={deleteuser}/>
        </Col>
      </Row>
    </div>
  )
}

export default FormTodo