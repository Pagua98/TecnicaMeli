import { useState } from "react";
import { Category, Products } from "../Types/SearchResult";
import api from "../Utils/api";
import config from "../config";

export function useProduct() {

    const [products, setProduct] = useState<Products[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Products>();
    const [productDescription, setProductDescription] = useState<string>('');
    const [categories, setCategories] = useState<Category[]>([]);

    const search = async (param: string) => {
        if (param !== '') {
            const response = await api.searchProduct(param);
            await updateFilters(response.categories);
            updateProduct(response.product);
        }
    };

    const getProductById = async (param: string) => {
        if (param !== '') {
            const response = await api.getProductById(param);
            setProductDescription(response.description.plain_text);
            updateFilters(response.categories);
            setSelectedProduct(response);
        }
    };

    const updateFilters = async (param: Category[]) => {
        setCategories(param);
    }

    const updateProduct = async (list: Products[]) => {
        setProduct(list);
    }

    const addThousandSeparators = (num: number): string => {
        const integerNum = Math.floor(num);
        return integerNum.toLocaleString(config.localeCode);
    }
      
    const getDecimalPrice = (decimal: number): number => {
        const percentage = decimal * 100;
        return percentage;
    }

    return {
        search,
        getProductById,
        addThousandSeparators,
        getDecimalPrice,

        products,
        selectedProduct,
        productDescription,
        categories
    };
}


