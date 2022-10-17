import uuid4 from "uuid4";
const Form = ({inputTodo,todos,setTodos}) => {
  
  const handlerSubmit=(env)=>{
    env.preventDefault();
    const newTodo ={id: uuid4(), title:inputTodo,completed:false};
    setTodos([...todos,newTodo]);
    inputTodo("");
  };
  return (
    <form onSubmit={handlerSubmit}>
        <button type="submit">Add To Cart</button>
    </form>
  );
};

export default Form;