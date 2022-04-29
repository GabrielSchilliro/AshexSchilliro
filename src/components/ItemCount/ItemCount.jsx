import { useState } from "react";
import './ItemCount.css'

function ItemCount ({stock, initial, onAdd}) {
    const [count, setCount] = useState(1);

    const sumar = () => {
        if (count < stock){
            setCount (count + 1)
        }
    }
    const restar = () => {
        if (count > initial) {
            setCount (count - 1)
        }
    }

    return(
        <div>
            <div className="contador">
            <div className="contador-control">
                <button onClick={restar} disabled={count === initial}>-</button>
                <p>{count}</p>
                <button onClick={sumar} disabled={count === stock}>+</button>
            </div>
            
            <div className="agregar">
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
            </div>
        </div>
    )
}
export default ItemCount