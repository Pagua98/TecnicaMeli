import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../Hooks/useProducts";
import Messages from "../../Interfaces/Messages";
import uiTexts from "../../localization/uiTexts";
import config from "../../config";
import { SectionProductDetail } from "./SectionProductDetail";
import { Component, Content } from "../Body/styles";

export const ProductDetailsComponent = () => {

  const { id } = useParams();
  const { getProductById, selectedProduct, productDescription, addThousandSeparators } = useProduct();

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
            <SectionProductDetail selectedProduct={selectedProduct}
                            parsedAmount={addThousandSeparators(selectedProduct.price)}
                            messages={message}
                            productDescription={productDescription}></SectionProductDetail>
        )}
      </Component>
    </Content>
  );
};

