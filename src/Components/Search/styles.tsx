import styled from 'styled-components'
import SearchIcon from '../../Assets/ic_Search.png';
import colors from '../../Styles/colors';

export const SearchButton = styled.button`
    background-color: ${colors.secundaryBtn};
    color: ${colors.primaryText};
    border: 0px;
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    background-position: center;
    height: 32px;
    width: 40px;
    border-radius: 0px;
    position: relative;
    cursor: pointer;

    &:active {
        background-color: ${colors.secundaryButtonActive};
    }
`

export const SearchInput = styled.input`
    background-color: ${colors.backgroundColorComponent};
    color: ${colors.primaryText};
    border: 0px;
    height: 30px;
    width: 100%;
    border-radius: 3px 0px 0px 3px;
    float: right;
    text-indent: 10px;

    @media (max-width: 768px) {
        width: 80%;
    }
`

export const SearchForm = styled.form`
    height: 100%;
    display: flex;
    width: 100%;
    height: 30px;
    background-color: ${colors.topBar};
    border: 0;
    margin-top: 3px;
`