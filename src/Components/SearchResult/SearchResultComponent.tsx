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
    const { search, products, filters, addThousandSeparators } = useProduct();

    const message: Messages[string] = uiTexts[config.defaultLanguage];

    useEffect(() => {
        if (searchTerm) {
            search(searchTerm);
        }
    }, [searchTerm])

    return (
        <Content>
            <BreadcrumComponent filters={filters}></BreadcrumComponent>
            <Component>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} 
                                parsedCurrency={message[`${product.currency_id}`]} 
                                parsedAmount={addThousandSeparators(product.price)}/>
                ))}
            </Component>
        </Content>
    );
};

export default SearchResultComponent;