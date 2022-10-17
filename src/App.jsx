// import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
// import TodoList from "./components/TodoList";
import Products from "./components/Products";




const App = () => {
 // const[inputTodo,setinputTodo] = useState("");
 
 const products = [
  {id:'1u', name:'Nike Dunk High Retro', value:120, amount:5, referency:'Really good Nike shoes', url:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/608d6f2b-f6eb-4a5f-8535-6f24b081e011/dunk-high-retro-zapatillas-tjf3hZ.png'},
  {id:'2u', name:'Nike Zoom Fly 5', value:150, amount:3, referency:'good Nike shoes', url:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cdb4e7b0-7772-41aa-82c0-4306f53050b6/zoom-fly-5-zapatillas-de-running-carretera-6PMLS5.png'},
  {id:'3u', name:'Nike Streetgato', value:180, amount:2, referency:'Really Nike shoes', url:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c526742e-8259-44bd-a37e-d27cf4e29194/streetgato-botas-de-futbol-zhWVgz.png'},
  {id:'4u', name:'Zoom Freak 4', value:150, amount:3, referency:'Really good Nike shoes', url:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dd30bba7-ae65-4fc3-975c-454f9b8d7ddd/zoom-freak-4-zapatillas-de-baloncesto-8Hdw9M.png'}
  ]

 // const [todos, setTodos] = useState([]);

  return (
  <div className="container">
    <div className="app-wrapper">
      <div>
        <Header></Header>
      </div>
      <div>
        <Products products={products}>
        </Products>
        <Form></Form>
      </div>

    </div>
  
  </div>
  );
};

export default App