import styled from 'styled-components';
import uiTexts from '../../localization/uiTexts';
import config from '../../config';
import Messages from '../../Interfaces/Messages';
import colors from '../../Styles/colors';

const Container = styled.div`
  margin: 40px 0 0 20px;
`;

const ProductDetail = styled.div`
  font-size: 11px;
  color: ${colors.itemDesc};
`;

type DetailProps = {
    condition: string;
    soldQuantity: number;
};

const message: Messages[string] = uiTexts[config.defaultLanguage];

const parseText = (condition: string, quantity: number): string => {
    return message[condition] + " - " + quantity + " " + message["sold_quantity"];
}

export const ProductStatus = ({ condition, soldQuantity }: DetailProps) => {
    return (
        <Container>
            <ProductDetail>{parseText(condition, soldQuantity)}</ProductDetail>
        </Container>
    );
};
