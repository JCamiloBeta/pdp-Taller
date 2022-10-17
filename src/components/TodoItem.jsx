import { FaTrash,FaEdit,FaCheckCircle } from 'react-icons/fa';
const TodoItem = ({product}) => {
  return (
        <li className="list">
            <div className="listItem">
                <strong>{product.name}</strong>
                <p>${product.value}</p>
            </div>
            <div>
                <button>
                    <FaCheckCircle>
                    </FaCheckCircle>
                </button>
                <button>
                    <FaEdit>
                    </FaEdit>
                </button>
                <button>
                    <FaTrash>
                    </FaTrash>
                </button>
            </div>
        </li>
  );
};
export default TodoItem;