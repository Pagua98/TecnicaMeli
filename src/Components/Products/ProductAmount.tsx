import styled from 'styled-components';

const Container = styled.div`
    margin: 25px 100px 40px 20px;
    font-weight: 400;
`;

const Currency = styled.span`
    margin: 0 4px 0 0;
    font-size: 30px;
`;

const Amount = styled.span`
    font-size: 30px;
`;

type ProductAmountProps = {
    parsedAmount: string,
    parsedCurrency: string
};


export const ProductAmount = ({ parsedAmount, parsedCurrency }: ProductAmountProps) => {
    return (
        <Container>
            <Currency> { parsedCurrency } </Currency>
            <Amount> { parsedAmount } </Amount>
        </Container>

    );
};