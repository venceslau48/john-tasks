import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }

    button {
      cursor: pointer;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      font-size: 62.5%;
      box-sizing: border-box;
      --color-text: ${props => props.theme.colors.text};
      --color-text-light: ${props => props.theme.colors.text_light};
      --color-text-dark: ${props => props.theme.colors.text_dark};
      --color-bg: ${props => props.theme.colors.bg};
      --color-bg-light: ${props => props.theme.colors.bg_light};
      --color-bg-dark: ${props => props.theme.colors.bg_dark};
      --color-primary: ${props => props.theme.colors.primary};
      --color-primary-light: ${props => props.theme.colors.primary_light};
      --color-secondary: ${props => props.theme.colors.secondary};
      --color-secondary-light: ${props => props.theme.colors.secondary_light};
      --color-success: ${props => props.theme.colors.success};
      --color-error: ${props => props.theme.colors.error};
      --color-warning: ${props => props.theme.colors.warning};
      --shadow-light: 0 0.45rem 0.65rem #eee;
      --shadow-dark: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.1);

      @media (min-width: 112.5em) {
        font-size: 70%;
      }

      @media (max-width: 25em) {
        font-size: 55%;
      }
    }

    body {
      font-family: ${props => props.theme.typo.montserrat};
      font-weight: 400;
      line-height: 1.6;
      background: ${props => props.theme.colors.bg};
    }

    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    a{
      text-decoration: none;
    }

    a:hover{
      transition: all 0.6s;
      color: var(--color-primary-light);
    }
`
