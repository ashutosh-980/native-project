import * as Yup from "yup";

export const inrInputSchema = Yup.object({
  inrInput: Yup.number()
    .typeError("Enter number only")
    .min(1, "Enter at-least one number")
    .required("INR Field is required"),
});
