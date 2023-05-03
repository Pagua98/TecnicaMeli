import uiTexts from '../../localization/uiTexts';
import config from '../../config';
import Messages from '../../Interfaces/Messages';
import { Container, ProductDetail } from './styles';
import { DetailProps } from '../../Types/DetailProps';

const message: Messages[string] = uiTexts[config.defaultLanguage];

const parseText = (condition: string, quantity: number): string => {
    return message[condition] + " - " + quantity + " " + message["sold_quantity"];
}

const ProductStatus: React.FC<DetailProps> = ({ condition, soldQuantity }) => {
    return (
        <Container>
            <ProductDetail>{parseText(condition, soldQuantity)}</ProductDetail>
        </Container>
    );
};

export default ProductStatus;
