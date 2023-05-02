import { ProductAmountProps } from "../../Types/ProductAmountProps";
import { AmountDetail, Container, Currency } from "./styles";

const ProductDetailAmount: React.FC<ProductAmountProps> = ({ parsedAmount, parsedCurrency }) => {
    return (
        <Container>
            <Currency> { parsedCurrency } </Currency>
            <AmountDetail> { parsedAmount } </AmountDetail>
        </Container>
    );
};

export default ProductDetailAmount;
