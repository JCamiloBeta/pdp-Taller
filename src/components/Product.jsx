// import { FaCheckCircle } from 'react-icons/fa';
import Form from "./Form";
const Product = ({product}) => {
  return (
        <li className="list">
            <div className="listItem">
            <img src={product.url} width="100" height="110"></img>
            </div>
            <div>
            <p>{product.name}</p>
            <p>${product.value}</p>
            <Form
                product={product}
            ></Form>
            </div>
            
        </li>
  );
};
export default Product;