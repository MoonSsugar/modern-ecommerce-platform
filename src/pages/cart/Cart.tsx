import { useNavigate } from "react-router";
import { removeItem, clearCart } from "../../redux/features/items/cartSlice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

export default function Cart() {
  const navigator = useNavigate();

  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0); 
  
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col p-5 bg-gray-100 max-w-xl rounded-xl my-5 mx-3 gap-3">
        <button
          className="bg-red-400 p-2 rounded-xl"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>

        {items.map((item) => {
          return (
            <div key={item.id} className="flex flex-col gap-2 bg-white p-3 rounded-xl max-w-80">
              <img src={item.thumbnail} alt="image" className="max-w-32"/>
              <h1>{item.title}</h1>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>

              <button
                className="bg-red-400 p-2 rounded-xl"
                onClick={() => dispatch(removeItem(item.id))}
              >Remove</button>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col">
        <h1>Order</h1>

        Total price: {totalPrice}

        <button 
          onClick={() => navigator("/checkout")}
        >Checkout</button>
      </div>
      
    </div>
  );
}