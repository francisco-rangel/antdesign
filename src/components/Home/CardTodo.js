import { Divider,
  Avatar,
  Image,
  Row,
  Col,
  Badge,
  Card,
  Button } from 'antd'
  import { CounterHook } from '../../hooks/counter';

const CardTodo = ({index, task, deleteuser}) => {
  const {useCount, count} = CounterHook()

  return (
    <div>
      <Card size="small" title="Todo task" style={{ width: 300 }}>
        <Row>
          <Col span={12}>
          <Badge count={count}>
            <Avatar size={64} src={<Image src="https://aiptcomics.com/wp-content/uploads/2019/12/BATMAN_Cv86-1.jpg" style={{ width: 70 }} />} />
          </Badge>
          </Col>
          <Col span={12}>
            <h3>{task.task}</h3>
            <Button type="primary" onClick={useCount}>Add</Button>
          </Col>
        </Row>
        <Divider/>
        <Button type="primary" onClick={() => deleteuser(index)} danger block>
          Delete
        </Button>
      </Card>
      <Divider/>
    </div>
  )
}

export default CardTodo