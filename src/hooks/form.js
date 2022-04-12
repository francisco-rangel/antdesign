import { useState } from 'react'

export const FormHook = () => {
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

  return {handleChange, onFinish, onError, deleteuser, task, tasks}
}