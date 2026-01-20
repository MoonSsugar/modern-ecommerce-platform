import { useNavigate } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
  const navigator = useNavigate();
  
  const items = useAppSelector((state) => state.cart.items);

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="flex justify-end bg-gray-300 p-1">
      <button
        className="relative mr-5 p-1"
        onClick={() => navigator("/cart")}
      >
        <IoCartOutline size={35} /> 

        {totalQuantity > 0 && (
          <span 
            className="absolute -top-1 -right-1 bg-red-300 w-5 h-5 flex justify-center items-center rounded-full shadow-sm text-[10px]"
          >{totalQuantity > 99 ? "99+" : totalQuantity}</span> 
        )}

      </button>
    </header>
  );
}