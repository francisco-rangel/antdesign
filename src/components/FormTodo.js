import { Input, Button, Col, Row, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './style.css';
import List from './List';

const FormTodo = () => {
  const [task, setTask] = useState({})
  const [tasks, setTasks] = useState([])

  const handleChange = evt => {
    const {name, value} = evt.target
    setTask({...task, [name]: value})
  }

  const onFinish = evt => {
    console.log('Success: ', evt);
    setTasks([...tasks, task]);
    setTask('')
  }

  const onError = err => {
    console.log('Failed: ', err);
  }

  const deleteuser = index => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

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