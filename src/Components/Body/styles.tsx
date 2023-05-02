import styled from 'styled-components';
import colors from '../../Styles/colors';

export const LineSeparator = styled.hr`
    margin: 15px 0;
    border: 1px solid ${colors.line};
`;

export const Content = styled.div`
    padding: 20px 15%;
    background-color: ${colors.backgroundColor};
    height: 100%;
    width: 100%;
    box-sizing: border-box;
`;

export const Component = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${colors.backgroundColorComponent};
    border-radius: 3px;
`;