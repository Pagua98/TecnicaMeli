import styled from 'styled-components';
import colors from '../../Styles/colors';

export const BuyButton = styled.button`
    margin: 10px 0 0 30px;
    background-color: ${colors.buyBtn};
    border-radius: 6px;
    padding: 0 24px;
    border-color: transparent;
    height: 48px;
    color: ${colors.buyBtnText};
    width: 80%;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: ${colors.buyBtnHover};
    }
`

export const Container = styled.div`
  margin: 40px 0 0 30px;
`;

export const ProductDetail = styled.div`
  font-size: 11px;
  color: ${colors.itemDesc};
`;

export const ProductImg = styled.img`
  border-radius: 5px;
  display: flex;
`;

export const DetailContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding-bottom: 100px;
    padding-top: 50px;
`;

export const DescriptionContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 0 0 20px;
  padding: 0 0 40px 0;
`;

export const LeftContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;

export const RightContainer = styled.div`
  max-width: 40%;
`;

export const ProductTitle = styled.div`
    margin: 10px 10px 0 30px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4em;
`;

export const DescriptionTitle = styled.div`
    margin: 10px 0 0 0;
    font-size: 25px;
    font-weight: 300;
    line-height: 1.4em;
`;

export const Description = styled.div`
    margin: 10px 0 0 0;
    font-size: 14px;
    line-height: 1.4em;
    color: ${colors.cityText};
    width: 90%;
`;