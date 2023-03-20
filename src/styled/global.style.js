import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    font-family: ${(props) => props.theme.fonts[1]};
}

h1, h2, h3, h4{
    font-family: ${(props) => props.theme.fonts[0]};
}
`;
