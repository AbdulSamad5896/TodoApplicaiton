import React from 'react'

const TodoItem = ({description, handleDeleteTodo, index, handleEditTodo}) => {
  return (
    <div className='py-3 flex justify-center items-center'>
      <div className='flex justify-between w-[60%] bg-gradient-to-br from-yellow-50 to-red-50 px-8 py-5 gap-[30px]'>
        <p className='text-2xl font-mono font-medium'>{description}</p>
        <div className='flex justify-between items-center gap-[30px]'>
            <button onClick={() => {handleEditTodo(index)}}>
                <i className="fa-solid fa-pen-to-square text-[30px] hover:cursor-pointer hover:scale-125 transition-transform duration-200 ease-in  "  ></i>
            </button>
            <button onClick={() => {handleDeleteTodo(index)}}>
                <i className="fa-regular fa-trash-can text-[30px] hover:cursor-pointer transition-transform duration-200 hover:scale-125"></i>
            </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
