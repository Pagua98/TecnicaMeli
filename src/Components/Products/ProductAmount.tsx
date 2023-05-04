import { ProductAmountProps } from '../../Types/ProductAmountProps';
import { Amount, ContainerAmount, CurrencyAmount, Decimals } from './styles';

const ProductAmount: React.FC<ProductAmountProps> = ({  parsedAmount, parsedCurrency, href, decimals }) => {
    return (
        <ContainerAmount href={href}>
            <CurrencyAmount> { parsedCurrency } </CurrencyAmount>
            <Amount> { parsedAmount } </Amount>
            { decimals > 0 ? <Decimals> { decimals } </Decimals> : null }
        </ContainerAmount>

    );
};

export default ProductAmount; 