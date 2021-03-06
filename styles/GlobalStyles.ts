import { createGlobalStyle } from "styled-components"
import { PropStyleTheme } from "../src/types"
import { scroll } from "./system/styles"
import { styles } from "./senixcode-lightbox-custom"
const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`

const GlobalStyles = createGlobalStyle`
${normalize};
body{
  font-family:${({ theme }: PropStyleTheme) => theme.font};
  background: ${(props: PropStyleTheme) => props.theme.colors.primary};
}
html, body {
  /* overflow-x: hidden; */
  ${scroll} 
}

h1, h2, h3, p{
  margin:0;
  font-weight:normal;
  color:${({ theme }: PropStyleTheme) => theme.colors.secondary}
}

p {
    ${({ theme }: PropStyleTheme) => theme.fontSizes.regular}
    color: ${({ theme }: PropStyleTheme) => theme.colors.textPrimary};
     font-weight: 276;
}
h1 {
  ${({ theme }: PropStyleTheme) => theme.fontSizes.larger};
}

h2 {
  ${({ theme }: PropStyleTheme) => theme.fontSizes.large};
}

h3 {
  ${({ theme }: PropStyleTheme) => theme.fontSizes.regular};
}

p, ul {
  ${({ theme }: PropStyleTheme) => theme.fontSizes.small};
  color: ${({ theme }: PropStyleTheme) => theme.colors.textPrimary};
  font-weight: lighter
}
small{
    font-size: ${(props: PropStyleTheme) => props.theme.fontSizes.small};
  color: rgb(117, 118, 118, 1);
}
.codesanbox-senixcode{
    width:100%; height:300px; border:0; border-radius: 12px;
  }
  pre {

    overflow-x: auto;
  }
  code[class*=language-] {
    padding: 1.5rem;
    display: block;
}
pre[class*=language-] {
    color: #1b1642;
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    font-size: .9rem;
    line-height: 1.875rem;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
}
img{
    width: 100%;
  height: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
@media (prefers-color-scheme: dark){

  pre code, pre samp {
    display: flex;
      color: #96d0ff;
      background-color: #282c34;
      white-space: pre-wrap;
      word-break:break-all;
   
  }
}
@media (min-width: ${(props) => props.theme.screen.sm}) {
  h1 {
    ${({ theme }: PropStyleTheme) => theme.fontSizes.xlarge};
  }
  h2 {
    ${({ theme }: PropStyleTheme) => theme.fontSizes.larger};
  }
  h3 {
    ${({ theme }: PropStyleTheme) => theme.fontSizes.large};
  }
  p {
  ${({ theme }: PropStyleTheme) => theme.fontSizes.regular};
  color: ${({ theme }: PropStyleTheme) => theme.colors.textPrimary};
  font-weight: normal
  }
  .codesanbox-senixcode{
    width:100%; height:500px; border:0; border-radius: 12px; overflow:hidden;
  }
}
   button {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    cursor: pointer;
  }
  small{
    font-size: ${(props: PropStyleTheme) => props.theme.fontSizes.regular};
  color: rgb(117, 118, 118, 1);
}
  ${styles}
  
`
export default GlobalStyles
