import { useState } from "react";
import { Products } from "../Types/SearchResult";
import api from "../Utils/api";
import config from "../config";
import { ProductDetails } from "../Types/ProductDetails";
import { Filter } from "../Types/Breadcrum";

export function useProduct() {

    const [products, setProduct] = useState<Products[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<ProductDetails>();
    const [productDescription, setProductDescription] = useState<string>('');
    const [filters, setFilters] = useState<Filter[]>([]);

    const search = async (param: string) => {
        if (param !== '') {
            const response = await api.searchProduct(param);
            await updateFilters(response.filters);
            updateProduct(response.results);
        }
    };

    const getProductById = async (param: string) => {
        if (param !== '') {
            const response = await api.getProductById(param);
            await setSelectedProduct(response);
            await getProductDescription(param);
            await getCategories();
        }
    };

    const getProductDescription = async (param: string) => {
        if (param !== '') {
            const response = await api.getProductDescription(param);
            await setProductDescription(response.plain_text);
        }
    };

    const getCategories = async () => {
            const response = await api.getProductCategories();
            await updateFilters(response);
    }

    const updateFilters = async (param: Filter[]) => {
        setFilters(param);
    }

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
        productDescription,
        filters
    };
}


