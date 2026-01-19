import { useState } from "react";
import { useGetProductsQuery, useAddProductMutation } from "../../services/productsApi";
import { ProductCard } from "./ProductCard";

export default function ProductsList() {
  const { data, error, isLoading } = useGetProductsQuery();  

  const [ triggerFunction, { isLoading: isAdding } ] = useAddProductMutation();

  const [ title, setTitle ] = useState("");
  const [ price, setPrice ] = useState(0);


  if (isLoading) {
    return (
      <h1 className="flex justify-center items-center w-screen h-screen">Loading...</h1>
    );
  } else if (error) {
    return (
      <h1 className="flex justify-center items-center w-screen h-screen">Error loading products</h1>
    );
  } else {
    return (
      <>
        <div className="grid grid-cols-5 gap-3 mx-5 mt-3">
          {data?.products.map((product) => {
            return (
              <ProductCard 
                product={product} 
              />
            );
          })}
          <form
            className="flex flex-col gap-2 mb-2"
            onSubmit={(event) => {
              event.preventDefault();
              triggerFunction({title: title, price: price})
            }}
          >
            <div>
              <label>Title</label>
              <input 
                className="border p-1" 
                type="text" 
                placeholder="Title"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                value={title}
              />
            </div>

            <div>
              <label>Price</label>
              <input 
                className="border p-1" 
                type="number" 
                placeholder="Price"
                onChange={(event) => {
                  setPrice(Number(event.target.value));
                }}
                value={price}
              />
            </div>

            <button type="submit" className="bg-green-200 p-1">
              {isAdding ? "Adding..." : "Add a product"}
            </button>
          </form>
        </div>
      </>
    )
  }
}