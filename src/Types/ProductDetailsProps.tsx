import Messages from "../Interfaces/Messages";
import { Products } from "./SearchResult";

export type ProductDetailsProps = {
    selectedProduct: Products,
    productDescription: string
    parsedAmount: string,
    messages: Messages[string]
};