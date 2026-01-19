import { useAppDispatch } from "../../redux/hooks";
import { addItem } from "../../redux/features/items/cartSlice";
import { useDeleteProductMutation } from "../../services/productsApi";
import type { Product } from "../../services/productsApi"

interface ProductCardProps {
  product: Product,
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();

  const [ triggerFunction, { isLoading: isDeleting } ] = useDeleteProductMutation();

  return (
    <div className="flex flex-col justify-between gap-2 relative bg-gray-100 p-3 rounded-xl" key={product.id}>
      <button 
        className="absolute top-1.5 left-1.5 hover:bg-red-400 rounded-full w-6 h-6 bg-red-200"
        onClick={() => triggerFunction(product.id)}
      >{isDeleting ? "..." : "X"}</button>
      
      <img src={product.thumbnail} alt="product-image" className="max-w-32" />

      <h1>Title: {product.title}</h1>

      <h1>Price: {product.price}</h1>
      
      <h1>Rating: {product.rating}</h1>
      
      <button 
        className="flex justify-center bg-green-300 p-1.5 rounded-full"
        onClick={() => {
          dispatch(addItem(
            {
              id: String(product.id),
              title: product.title,
              price: product.price,
              thumbnail: product.thumbnail,
              quantity: 1
            }
          ));
          }
        }
      >Add to cart</button>
    </div>
  );
}