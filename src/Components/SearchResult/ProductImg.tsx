import styled from 'styled-components';

type ImageLinkProps = {
    width?: string;
    height?: string;
  };
  

const ImageLink = styled.a<ImageLinkProps>`
  display: inline-block;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  cursor: pointer;
`;

type ImgProps = {
    src: string;
    alt: string;
  };

const Img = styled.img<ImgProps>`
    height: 180px;
    width: 180px;
    display: flex;
    border-radius: 5px
`;

type ImageWithLinkProps = {
    src: string;
    alt: string;
    href: string;
    width?: string;
    height?: string;
  };

export const ProductImg = ({ src, alt, href, width='180px', height='180px' }: ImageWithLinkProps) => {
  return (
    <ImageLink href={href} width={width} height={height}>
      <Img src={src} alt={alt} />
    </ImageLink>
  );
};
