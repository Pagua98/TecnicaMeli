import styled from 'styled-components'
import SearchIcon from '../../Assets/ic_Search.png';
import colors from '../../Styles/colors';

export const SearchButton = styled.button`
    background-color: ${colors.secundaryButton};
    color: ${colors.primaryText};
    border: 0px;
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    background-position: center;
    height: 32px;
    width: 30px;
    border-radius: 0px;
    position: relative;
    cursor: pointer;

    &:active {
        background-color: ${colors.secundaryButtonActive};
    }
`
