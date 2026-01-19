import { useNavigate } from "react-router";
import { useAppSelector } from "../redux/hooks";

export default function Header() {
  const navigator = useNavigate();
  
  const items = useAppSelector((state) => state.cart.items);

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="flex justify-end bg-cyan-300 p-1">
      <button
        onClick={() => navigator("/cart")}
      >
        Cart {totalQuantity > 0 ? totalQuantity : ""}
      </button>
    </header>
  );
}