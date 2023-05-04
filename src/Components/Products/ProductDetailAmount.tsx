import { ProductAmountProps } from "../../Types/ProductAmountProps";
import { AmountDetail, Container, Currency, Decimals } from "./styles";

const ProductDetailAmount: React.FC<ProductAmountProps> = ({ parsedAmount, parsedCurrency, decimals }) => {
    return (
        <Container>
            <Currency> { parsedCurrency } </Currency>
            <AmountDetail> { parsedAmount } </AmountDetail>
            { decimals > 0 ? <Decimals> { decimals } </Decimals> : null }
        </Container>
    );
};

export default ProductDetailAmount;
