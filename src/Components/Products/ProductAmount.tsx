import { ProductAmountProps } from '../../Types/ProductAmountProps';
import { Amount, ContainerAmount, CurrencyAmount } from './styles';

const ProductAmount: React.FC<ProductAmountProps> = ({  parsedAmount, parsedCurrency, href }) => {
    return (
        <ContainerAmount href={href}>
            <CurrencyAmount> { parsedCurrency } </CurrencyAmount>
            <Amount> { parsedAmount } </Amount>
        </ContainerAmount>

    );
};

export default ProductAmount; 