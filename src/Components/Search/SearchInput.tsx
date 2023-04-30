import styled from 'styled-components'
import colors from '../../Styles/colors';

export const SearchInput = styled.input`
    background-color: ${colors.backgroundColor};
    color: ${colors.primaryText};
    border: 0px;
    height: 30px;
    width: 100%;
    border-radius: 3px 0px 0px 3px;
    float: right;

    @media (max-width: 768px) {
        width: 80%;
    }
`