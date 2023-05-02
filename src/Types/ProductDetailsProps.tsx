import Messages from "../Interfaces/Messages";
import { ProductDetails } from "./ProductDetails";

export type ProductDetailsProps = {
    selectedProduct: ProductDetails,
    productDescription: string
    parsedAmount: string,
    messages: Messages[string]
};