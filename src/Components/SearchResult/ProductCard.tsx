import { ProductImg } from './ProductImg';
import { CardProps } from '../../Types/CardProps';
import { ProductAmount } from '../Products/ProductAmount';
import ic_shipping from '../../Assets/ic_shipping.png'
import { AmountContainer, Card, CardDescription, CardDetails, ProductDescription, SellerCity, SellerContainer, ShippingImg } from './styles';
import { LineSeparator } from '../Body/styles';


export const ProductCard: React.FC<CardProps> = ({ product, parsedCurrency, parsedAmount }) => {
  return (
    <>
      <Card product={product} parsedCurrency={parsedCurrency} parsedAmount={parsedAmount}>
        <CardDetails>
          <ProductImg src={product.thumbnail} alt={product.title} href={`/items/${product.id}`} />
          <CardDescription>
            <AmountContainer>
              <ProductAmount parsedAmount={parsedAmount} parsedCurrency={parsedCurrency} href={`/items/${product.id}`} />
              {product.shipping.free_shipping ? (
                <span >
                  <ShippingImg style={{ }} src={ic_shipping} />
                </span>
              ) : null}
            </AmountContainer>
            <ProductDescription href={`/items/${product.id}`}> {product.title} </ProductDescription>
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
