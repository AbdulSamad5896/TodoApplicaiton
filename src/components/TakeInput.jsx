import React, { useState } from 'react'

const TakeInput = ({handleAddTodo, editData, handleEditData}) => {
    


  return (
    <div className='w-screen flex justify-center '>
      <div className=' w-[60%] px-8 py-5'>
        <input type="text" placeholder='Enter Todo...' value={editData} onChange={(e) => {handleEditData(e.target.value)}} className='w-[80%] border-2 border-gray-300 px-4 py-5 mr-10 rounded-full bg-gradient-to-br from-yellow-50 to-red-50 text-2xl font-mono font-semibold pl-8'/>
        <button className='text-2xl font-mono font-semibold text-black border-2 border-black rounded-full px-[20px] py-[5px] hover:text-white hover:bg-black active:text-black active:bg-white' onClick={() => { if (editData){handleAddTodo(editData); handleEditData('')} else alert("Please Enter Something.")}}>Add</button>
      </div>

    </div>
  )
}

export default TakeInput
