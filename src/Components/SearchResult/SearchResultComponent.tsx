import { useEffect } from "react";
import { Content } from "../Body/Content";
import { Component } from "../Body/Component";
import { useParams } from "react-router-dom";
import { useProduct } from "../../Hooks/useProducts";
import Messages from "../../Interfaces/Messages";
import uiTexts from "../../localization/uiTexts";
import config from "../../config";
import { ProductCard } from "./ProductCard";

export const SearchResultComponent = () => {

    const { searchTerm } = useParams();
    const { search, products, addThousandSeparators } = useProduct();

    const message: Messages[string] = uiTexts[config.defaultLanguage];

    useEffect(() => {
        const term: string = searchTerm ? searchTerm : "";
        if(term !== ""){
            search(term)
        }
    }, [searchTerm])


    return (
        <Content>
            <Component>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} 
                                parsedCurrency={message[`${product.currency_id}`]} 
                                parsedPrice={addThousandSeparators(product.price)}/>
                ))}
            </Component>
        </Content>
    );
};
