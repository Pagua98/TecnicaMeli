import { Img } from "./styles";

type ImgProps = {
    src: string
};

const LogoImg: React.FC<ImgProps> = ({ src }) => {
    return (
        <a href='/'>
            <Img src={src}/>
        </a>
    );
}

export default LogoImg;