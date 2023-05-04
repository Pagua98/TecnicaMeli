import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../Hooks/useProducts";
import Messages from "../../Interfaces/Messages";
import uiTexts from "../../localization/uiTexts";
import config from "../../config";
import ProductCard from "./ProductCard";
import { Component, 
         Content } from "../Body/styles";
import BreadcrumComponent from "../Breadcrum/BreadcrumComponent";

const SearchResultComponent = () => {

    const { searchTerm } = useParams();
    const { search, products, categories, addThousandSeparators, getDecimalPrice } = useProduct();

    const message: Messages[string] = uiTexts[config.defaultLanguage];

    useEffect(() => {
        if (searchTerm) {
            search(searchTerm);
        }
    }, [searchTerm])

    return (
        <Content>
            <BreadcrumComponent categories={categories}></BreadcrumComponent>
            <Component>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} 
                                parsedCurrency={message[`${product.price.currency}`]} 
                                parsedAmount={addThousandSeparators(product.price.amount)}
                                decimals={getDecimalPrice(product.price.decimals)}/>
                ))}
            </Component>
        </Content>
    );
};

export default SearchResultComponent;