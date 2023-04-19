import React from "react";


const CartWidget = ({contador}) => {
    return (
        <div className="cart">
            🛒<span>{contador}</span>
        </div>

    )
}


export default CartWidget;