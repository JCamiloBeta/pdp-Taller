import TodoItem from "./TodoItem"

const TodoList = ({products}) => {
  return (
    <div>
      {products.map((product)=>(
        <TodoItem key={product.id} product={product}>
        </TodoItem>
      ))}
    </div>
  )
}
export default TodoList;