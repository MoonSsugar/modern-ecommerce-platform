import { useNavigate } from "react-router";

export default function CartHeader() {
  const navigator = useNavigate();
  
  return (
    <div className="flex p-3 bg-amber-300">
      <button 
        onClick={() => navigator("/")}
        className="bg-gray-300 p-2 rounded-full"
      >Back</button>
    </div>
  );
}