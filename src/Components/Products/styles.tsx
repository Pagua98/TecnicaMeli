import styled from 'styled-components';
import colors from '../../Styles/colors';

export const Container = styled.div`
    margin: 25px 100px 30px 30px;
    font-weight: 400;
`;

export const Currency = styled.span`
    margin: 0 4px 0 0;
    font-size: 30px;
`;

export const AmountDetail = styled.span`
    font-size: 30px;
`;

export const ContainerAmount = styled.a`
    margin: 25px 10px 30px 30px;
    font-weight: 400;
    text-decoration: none;
    color: ${colors.primaryText};
    curson: pointer;
`;

export const CurrencyAmount = styled.span`
    margin: 0 4px 0 0;
    font-size: 25px;
    @media (max-width: 768px) {
        font-weight: 350;
        font-size: 18px;
    }
`;

export const Amount = styled.span`
    font-size: 25px;
    @media (max-width: 768px) {
        font-weight: 350;
        font-size: 18px;
    }
`;