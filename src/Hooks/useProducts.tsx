import { useState } from "react";
import { Products } from "../Types/SearchResult";
import api from "../Utils/api";
import config from "../config";
import { Description, ProductDetails } from "../Types/ProductDetails";

export function useProduct() {

    const [products, setProduct] = useState<Products[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<ProductDetails>();
    const [productDescription, setProductDescription] = useState<string>('');

    const search = async (param: string) => {
        if (param !== '') {
            const response = await api.searchProduct(param);
            updateProduct(response.results);
        }
    };

    const getProductById = async (param: string) => {
        if (param !== '') {
            const response = await api.getProductById(param);
            await getProductDescription(param);
            setSelectedProduct(response);
        }
    };

    const getProductDescription = async (param: string) => {
        if (param !== '') {
            const response = await api.getProductDescription(param);
            setProductDescription(response.plain_text);
        }
    };

    const updateProduct = async (list: Products[]) => {
        setProduct(list);
    }

    const addThousandSeparators = (num: number): string => {
        return num.toLocaleString(config.localeCode, {minimumFractionDigits: 2, maximumFractionDigits: 2});
      }
      

    return {
        search,
        getProductById,
        getProductDescription,
        addThousandSeparators,

        products,
        selectedProduct,
        productDescription
    };
}


