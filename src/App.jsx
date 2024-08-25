// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import TakeInput from './components/TakeInput'
// import TodoList from './components/TodoList'

// function App() {
//   const [count, setCount] = useState(0);
//   const [todoList, setTodoList] = useState([]);
//   const [inputText, setInputText] = useState('');

//   useEffect(() => {

//     if(!localStorage){
//       return
//     }

//     let localTodoList = localStorage.getItem('todoList')
//     if(!localTodoList){
//       return
//     }

//     localTodoList = JSON.parse(localTodoList).todoList
//     setTodoList(localTodoList)


//   }, [])

//   function persistData(newData){
//     localStorage.setItem('todolist', JSON.stringify({todoList : newData}))
//   }

//   function handleChangeInput(text){
//     setInputText(text)
//   }

//   function handleAddTodo(todo){
//     setTodoList([...todoList, todo])
//     persistData(todoList)
//   }

//   function handleDeleteTodo(index){
//     setTodoList(todoList.filter((todo, todoIndex) => {
//         return (todoIndex !== index)
//     }))
//     persistData(todoList)
//   }

//   function handleEditTodo(index){
//     setInputText(todoList[index])
//     handleDeleteTodo(index);
//   }

//   return (
//     < >
//       <div className='bg-gradient-to-br from-yellow-100 to-red-100'>
//         <TakeInput
//         handleAddTodo={handleAddTodo}
//         editData={inputText}
//         handleEditData={handleChangeInput}
//         />
//         <TodoList 
//         todoList={todoList}
//         handleDeleteTodo={handleDeleteTodo}
//         handleEditTodo={handleEditTodo}
//         />
//       </div>
//     </>
//   )
// }

// export default App



import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TakeInput from './components/TakeInput';
import TodoList from './components/TodoList';

function App() {
  const [count, setCount] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    let localTodoList = localStorage.getItem('todolist'); // Correct key casing to match setItem

    if (localTodoList) {
      setTodoList(JSON.parse(localTodoList).todoList); // Corrected parsing
    }
  }, []);

  function persistData(newData) {
    localStorage.setItem('todolist', JSON.stringify({ todoList: newData })); // Correct key casing
  }

  function handleChangeInput(text) {
    setInputText(text);
  }

  function handleAddTodo(todo) {
    const updatedList = [...todoList, todo];
    setTodoList(updatedList);
    persistData(updatedList); // Persist after updating state
  }

  function handleDeleteTodo(index) {
    const updatedList = todoList.filter((_, todoIndex) => todoIndex !== index);
    setTodoList(updatedList);
    persistData(updatedList); // Persist after updating state
  }

  function handleEditTodo(index) {
    setInputText(todoList[index]);
    handleDeleteTodo(index);
  }

  return (
    <>
      <div className='bg-gradient-to-br from-yellow-100 to-red-100 h-screen'>
        <TakeInput
          handleAddTodo={handleAddTodo}
          editData={inputText}
          handleEditData={handleChangeInput}
        />
        <TodoList 
          todoList={todoList}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        />
      </div>
    </>
  );
}

export default App;
