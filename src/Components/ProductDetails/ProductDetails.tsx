import styled from 'styled-components';
import { ProductStatus } from './ProductStatus';
import { Products } from '../../Types/SearchResult';
import { ProductAmount } from '../Products/ProductAmount';
import { BuyButton } from './BuyButton';
import colors from '../../Styles/colors';
import Messages from '../../Interfaces/Messages';

const ProductImg = styled.img`
  height: 600px;
  width: 600px;
  border-radius: 5px;
  display: flex;
`;

const DetailContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const DescriptionContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 0 0 20px;
  padding: 0 0 40px 0;
`;

const LeftContainer = styled.div`
  width: 80%;
`;

const RightContainer = styled.div`
  width: 40%;
`;

const ProductTitle = styled.div`
    margin: 10px 100px 0 20px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4em;
`;

const DescriptionTitle = styled.div`
    margin: 10px 0 0 0;
    font-size: 25px;
    font-weight: 300;
    line-height: 1.4em;
`;

const Description = styled.div`
    margin: 10px 0 0 0;
    font-size: 14px;
    line-height: 1.4em;
    color: ${colors.cityText}
`;

type ProductDetailsProps = {
    selectedProduct: Products,
    parsedAmount: string,
    messages: Messages[string]
};

export const ProductDetails = ({ selectedProduct, parsedAmount, messages }: ProductDetailsProps) => {
    return (
        <>
            <DetailContainer>
                <LeftContainer>
                    <ProductImg src={selectedProduct.thumbnail} alt={selectedProduct.title} />
                </LeftContainer>
                <RightContainer >
                    <ProductStatus soldQuantity={selectedProduct.sold_quantity} condition={selectedProduct.condition}></ProductStatus>
                    <ProductTitle>{selectedProduct.title}</ProductTitle>
                    <ProductAmount parsedAmount={parsedAmount} parsedCurrency={messages[`${selectedProduct.currency_id}`]}></ProductAmount>
                    <BuyButton>{messages['buyBtnTitle']}</BuyButton>
                </RightContainer>
            </DetailContainer>
            <DescriptionContainer>
                <DescriptionTitle>{messages['descriptionTitle']}</DescriptionTitle>
                <Description>{selectedProduct.permalink}</Description>
            </DescriptionContainer>
        </>
    );
};
