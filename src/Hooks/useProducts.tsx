import { useState } from "react";
import { Products } from "../Types/SearchResult";
import api from "../Utils/api";

export function useProduct() {

    const [products, setProduct] = useState<Products[]>([])
    const [selectedProduct, setSelectedProduct] = useState<Products>()

    const search = async (param: string) => {
        if (param !== '') {
            const response = await api.searchProduct(param);
            updateProduct(response.results);
        }
    };

    const getProductById = async (param: string) => {
        if (param !== '') {
            const response = await api.getProductById(param);
            console.log(response);
            setSelectedProduct(response);
        }
    };

    const updateProduct = async (list: Products[]) => {
        setProduct(list);
    }

    const addThousandSeparators = (num: number): string  =>{
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return {
        search,
        getProductById,
        addThousandSeparators,

        products,
        selectedProduct
    };
}


