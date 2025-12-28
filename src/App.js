
import "./App.css";
import  Header from "./mycomponents/header";
import Todos from "./mycomponents/todos";
import Footer from "./mycomponents/footer";
import React,{useEffect, useState} from "react";
import Addtodo from "./mycomponents/addtodo";
import About from "./mycomponents/about";

import { BrowserRouter , Routes, Route } from "react-router-dom";



function App() {
  let initTodos;

     if(localStorage.getItem("todos")===null){
    initTodos=[];
  }
  else{
    initTodos=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete=(todo)=>{
    console.log("i am on delete of todo item",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }) );


      localStorage.setItem("todos",JSON.stringify(todos));

  }
  const [todos, setTodos] = useState(initTodos); 


  const addTodo=(title,desc)=>{
    console.log("i am adding this todo",title,desc);
    let sno;
    if(todos.length===0){
      sno=1;
    }
    else{
      sno=todos[todos.length-1].sno +1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
}

   useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
   }, [todos]); 


  return (
  <BrowserRouter>
  
    <div className="app-container">  
 

  <Header title="My Todo List" searchbar={true} />

  <Routes>
    <Route
      path="/"
      element={
        <>
          <Addtodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
        </>
      }
    />

    <Route path="/about" element={<About />} />

   
  </Routes>

  </div>
 <Footer />
</BrowserRouter>
  );

}
export default App;

