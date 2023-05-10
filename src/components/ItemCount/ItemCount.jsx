 import { useState } from "react";
 import Button from 'react-bootstrap/Button';



 const ItemCount = ({stock, initial, onAdd})=>{
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const descrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return (
    <div className="Counter">
            <div className="Controls">
                <Button variant="primary" onClick={descrement}>-</Button>
                <h4 className="Number">{quantity}</h4>
                <Button variant="primary" onClick={increment}>+</Button>

            </div>
        <div>
            <Button variant="success" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar</Button>
        </div>
    </div>
    )
}

export default ItemCount;