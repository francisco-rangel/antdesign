let id = 0

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: id++,
    text
  }
}