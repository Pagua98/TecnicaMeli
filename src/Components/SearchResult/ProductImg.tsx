import { ImageLink, Img } from './styles';
import { ImageWithLinkProps } from './types';

const ProductImg: React.FC<ImageWithLinkProps> = ({ src, alt, href, width='180px', height='180px' }) => {
  return (
    <ImageLink href={href} width={width} height={height}>
      <Img src={src} alt={alt} />
    </ImageLink>
  );
};

export default ProductImg;