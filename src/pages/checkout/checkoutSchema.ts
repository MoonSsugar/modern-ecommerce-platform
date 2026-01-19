import * as z from "zod";

export const checkoutSchema = z.object({
  fullname: z.string().min(2, "Plese, write your name correctly").nonempty("This field is necessarily"),
  email: z.email({ message: "Invalid email format" }).nonempty("This field is necessarily"),
  phoneNumber: z.string().min(10, "Invalid phone format").nonempty("This field is necessarily")
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;