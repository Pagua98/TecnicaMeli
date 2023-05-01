import styled from 'styled-components';
import { ProductImg } from './ProductImg';
import { ProductDescription } from './ProductDescription';
import { LineSeparator } from '../Body/LineSeparator';
import { CardProps } from '../../Types/CardProps';
import colors from '../../Styles/colors';

const Card = styled.div<CardProps>`
    padding: 20px;
`;

const CardDetails = styled.div`
    width: 100%;
    height: 180px;
    border-radius: 4px 4px 0 0;
    display: flex;
    alignItems: center;
    word-wrap: break-word;
`;

const ProductPrice = styled.span`
    margin: 15px 10px;
    font-size: 20px;
    font-weight: 400
`;

const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%%;
    height: 100%;
    max-height: 180px;
    word-wrap: break-word;
    font-size: 2vw;
`;

const SellerContainer = styled.div`
  width: 50%;
  padding: 20px 8% 0 0;
`;

const SellerCity = styled.span`
  color: ${colors.cityText};
  float: right;
  text-align: right;
  font-weigth: 300;
  font-size: 12px
`;

export const ProductCard = ({ product, parsedCurrency, parsedPrice} : CardProps) => {
  return (
    <>
    <Card product={product} parsedCurrency={parsedCurrency} parsedPrice={parsedPrice}>
      <CardDetails>
        <ProductImg src={product.thumbnail} alt={product.title} href={`/items/:${product.id}`} />
        <CardDescription>
          <ProductPrice>{parsedCurrency} {parsedPrice}</ProductPrice>
          <ProductDescription> {product.title} </ProductDescription>
        </CardDescription>
        <SellerContainer>
          <SellerCity>{product.address.city_name}</SellerCity>
        </SellerContainer>
      </CardDetails>
    </Card>
    <LineSeparator />
    </>
  );
};
