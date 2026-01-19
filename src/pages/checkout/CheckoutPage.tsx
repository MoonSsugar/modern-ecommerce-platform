import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema } from "./checkoutSchema";
import { useAppDispatch } from "../../redux/hooks";
import { clearCart } from "../../redux/features/items/cartSlice";
import type { CheckoutFormValues } from "./checkoutSchema";

export default function CheckoutPage() {
  const navigator = useNavigate();

  const dispatch = useAppDispatch();

  const {
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phoneNumber: "",
    }
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Successful", data)
    
    dispatch(clearCart());

    alert("Successful");

    navigator("/");
  };

  return (
    <>
      <header className="bg-green-300 flex p-4">
        <button
          onClick={() => navigator("/cart")}
        >Back</button>
      </header>

      <div className="flex justify-center mt-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col bg-gray-200 rounded-xl p-4 h-78 w-md gap-3"
        >

          <div className="flex flex-col gap-0.5">
            <label>Full name</label>
            <input className="bg-white" {...register("fullname")} />
            <p className="text-red-600">{errors.fullname?.message}</p>
          </div>

          <div className="flex flex-col gap-0.5">
            <label>Email</label>
            <input className="bg-white " {...register("email")} />
            <p className="text-red-600">{errors.email?.message}</p>
          </div>

          <div className="flex flex-col gap-0.5">
            <label>Phone number</label>
            <input className="bg-white " {...register("phoneNumber")} />
            <p className="text-red-600">{errors.phoneNumber?.message}</p>
          </div>

          <button type="submit" className="bg-green-300">Accept</button>
        </form>
      </div>
      
    </>
  );
}