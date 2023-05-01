import { useState } from "react";
import { Products } from "../Interfaces/SearchResult";
import api from "../Utils/api";

export function useProduct() {

    const [products, setProduct] = useState<Products[]>([])

    const search = async (param: string) => {
        if (param !== '') {
            const response = await api.searchProduct(param);
            updateProduct(response.results);
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
        products,
        addThousandSeparators
    };
}


