import styled from 'styled-components';
import colors from '../../Styles/colors';

export const BuyButton = styled.button`
    margin: 10px 0 0 20px;
    background-color: ${colors.buyBtn};
    border-radius: 6px;
    padding: 0 24px;
    border-color: transparent;
    height: 48px;
    color: ${colors.buyBtnText};
    width: 80%;
    font-size: 16px;
    font-weight: 500;

    &:hover {
        background-color: ${colors.buyBtnHover};
    }
`
