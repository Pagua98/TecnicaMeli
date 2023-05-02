import { useEffect } from "react";
import { Content } from "../Body/Content";
import { Component } from "../Body/Component";
import { useParams } from "react-router-dom";
import { useProduct } from "../../Hooks/useProducts";
import Messages from "../../Interfaces/Messages";
import uiTexts from "../../localization/uiTexts";
import config from "../../config";
import { ProductDetails } from "./ProductDetails";

export const ProductDetailsComponent = () => {

  const { id } = useParams();
  const { getProductById, selectedProduct, addThousandSeparators } = useProduct();

  const message: Messages[string] = uiTexts[config.defaultLanguage];

  useEffect(() => {
    const term: string = id ? id : "";
    if (term !== "") {
      getProductById(term)
    }
  }, [id])

  return (
    <Content>
      <Component>
        {selectedProduct && (
            <ProductDetails selectedProduct={selectedProduct}
                            parsedAmount={addThousandSeparators(selectedProduct.price)}
                            messages={message}></ProductDetails>
        )}
      </Component>
    </Content>
  );
};

