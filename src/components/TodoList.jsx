import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    let {todoList, handleDeleteTodo, handleEditTodo} = {...props}

  return (
    <div className='py-8'>
      
        {todoList.map((todo, index) => (
            <TodoItem 
            key={index}
            description={todo}
            index={index}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}

            />
        ))}

    </div>
  )
}

export default TodoList
