import { ProductStatus } from './ProductStatus';
import ProductDetailAmount from '../Products/ProductDetailAmount';
import { BuyButton, 
        Description, 
        DescriptionContainer, 
        DescriptionTitle, 
        DetailContainer, 
        LeftContainer, 
        ProductImg, 
        ProductTitle, 
        RightContainer } from './styles';
import { ProductDetailsProps } from '../../Types/ProductDetailsProps';

export const SectionProductDetail: React.FC<ProductDetailsProps> = ({ selectedProduct, parsedAmount, messages, productDescription }) => {
    return (
        <>
            <DetailContainer>
                <LeftContainer>
                    <ProductImg src={selectedProduct.pictures[0].url} alt={selectedProduct.title} />
                </LeftContainer>
                <RightContainer>
                    <ProductStatus soldQuantity={selectedProduct.sold_quantity} condition={selectedProduct.condition}></ProductStatus>
                    <ProductTitle>{selectedProduct.title}</ProductTitle>
                    <ProductDetailAmount parsedAmount={parsedAmount} parsedCurrency={messages[`${selectedProduct.currency_id}`]}></ProductDetailAmount>
                    <BuyButton>{messages['buyBtnTitle']}</BuyButton>
                </RightContainer>
            </DetailContainer>
            <DescriptionContainer>
                <DescriptionTitle>{messages['descriptionTitle']}</DescriptionTitle>
                <Description>{productDescription}</Description>
            </DescriptionContainer>
        </>
    );
};
