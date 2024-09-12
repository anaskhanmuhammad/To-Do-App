// import AppName from "./components/AppName";
// import AddToDo from "./components/AddToDo";
// import ToDoItem1 from "./components/ToDoItem1";
// import ToDoItem2 from "./components/ToDoItem2";
// import Welcome from "./components/Welcome";
// import "./App.css";
// // import ToDoItem from "./components/ToDoItem";
// import ToDoItems from "./components/ToDoItems";
// import { useState } from "react";




// function App() {

//   const ToDoItemsList_initial = [

//   ]


//   const [ToDoItemsList, setToDoItemsList] = useState(ToDoItemsList_initial);

//   function handleNewItem(itemName, itemDueDate) {
//     // console.log(itemName);
//     // console.log(itemDueDate);
//     // setToDoItemsList(newList);
//     setToDoItemsList((currValue) => {
//       const newList = [...currValue, {name: itemName, date: itemDueDate}];
//       return newList;
//     })
//   } 

//   function handleDeleteItems(itemToDeleteName) {
//     console.log(itemToDeleteName);
//     const newList = ToDoItemsList.filter(item => item.name != itemToDeleteName)
//     setToDoItemsList(newList);
//   } 







//   return <center className = 'container'>
//     <AppName></AppName>

//     <AddToDo onNewItems = {handleNewItem}></AddToDo>

//     <Welcome ToDoItemsList= {ToDoItemsList}></Welcome>

//     <div className = 'Items-container'>

//       <ToDoItems details= {ToDoItemsList} onDeleteClick= {handleDeleteItems}></ToDoItems>
//       {/* 
//       <ToDoItem name= {'Milk'} date={'10/11/2024'}></ToDoItem>
//       <ToDoItem name= {'Go To Work'} date={'10/11/2024'}></ToDoItem>
//       <ToDoItem name= {'Eat Medicines'} date={'10/11/2024'}></ToDoItem> */}
//       {/* <ToDoItem1></ToDoItem1>
//       <ToDoItem2></ToDoItem2> */}
//     </div>




//   </center>

  

// }

// export default App




//--------------------------------------------------------------------------------------------------



























import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem1 from "./components/ToDoItem1";
import ToDoItem2 from "./components/ToDoItem2";
import Welcome from "./components/Welcome";
import { TodoItemsContext } from "./store/todo-items-store";
import "./App.css";
// import ToDoItem from "./components/ToDoItem";
import ToDoItems from "./components/ToDoItems";
import { useState, useReducer } from "react";
import TodoItemsContextProvider from "./store/todo-items-store";





function App() {

  // const ToDoItemsList_initial = [

  // ]


  //const [ToDoItemsList, setToDoItemsList] = useState(ToDoItemsList_initial);
  





  return (
    <TodoItemsContextProvider>
      <center className = 'container'>
        <AppName></AppName>
        <AddToDo></AddToDo>
        <Welcome></Welcome>
        <div className = 'Items-container'>
          <ToDoItems></ToDoItems>
        </div>
      </center>
    </TodoItemsContextProvider>
  )
  

}

export default App

