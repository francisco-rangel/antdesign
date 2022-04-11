import CardTodo from './CardTodo';

const List = ({tasks, deleteuser}) => {
  return (
    <div className="list">
      {
        tasks.map((task, index) => (
          <CardTodo
            key={index} 
            index={index} 
            task={task} 
            deleteuser={deleteuser}
          />
        ))
      }
    </div>
  )
}

export default List