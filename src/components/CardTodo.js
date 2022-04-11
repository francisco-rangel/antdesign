import { Card, Button } from 'antd'
import { Divider } from 'antd';

const CardTodo = ({index, task, deleteuser}) => {
  return (
    <div>
      <Card size="small" title="Todo task" style={{ width: 300 }}>
        <h3>{task.task}</h3>
        <Button type="primary" onClick={() => deleteuser(index)} danger block>
          Delete
        </Button>
      </Card>
      <Divider/>
    </div>
  )
}

export default CardTodo