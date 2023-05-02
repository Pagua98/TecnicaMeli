import styled from "styled-components";
import { CardProps } from "../../Types/CardProps";
import colors from "../../Styles/colors";
import { ImgProps } from "../../Types/ImgProps";
import { ImageLinkProps } from "./types";

export const Card = styled.div<CardProps>`
    padding: 20px;
`;

export const CardDetails = styled.div`
    width: 100%;
    height: 180px;
    border-radius: 4px 4px 0 0;
    display: flex;
    alignItems: center;
    word-wrap: break-word;
`;

export const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-height: 180px;
    word-wrap: break-word;
`;

export const ProductDescription = styled.a`
    margin: 0px 30px;
    font-weight: 400
    height: 100%;
    max-height: 180px;
    font-size: 20px;
    text-decoration: none;
    color: ${colors.secundaryText};
`;

export const SellerContainer = styled.div`
    width: 20%;
    padding: 20px 60px 0 0;
    text-align: center;
    justify-content: right;
`;

export const SellerCity = styled.span`
    color: ${colors.cityText};
    float: right;
    text-align: right;
    font-weigth: 300;
    font-size: 12px
`;

export const ShippingImg = styled.img`
    width:25px;
    height:25px; 
    margin: 25px 0 0 0;
`;

export const AmountContainer = styled.div`
    display: flex;
`;


export const ImageLink = styled.a<ImageLinkProps>`
    display: inline-block;
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    cursor: pointer;  
`;

export const Img = styled.img<ImgProps>`
    height: 180px;
    width: 180px;
    display: flex;
    border-radius: 5px
`;
