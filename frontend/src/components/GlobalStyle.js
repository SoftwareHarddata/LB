import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    #root{
      position: fixed;
      top: 0px;
      left: 0;
      width: 100%;
      height: 100%;
      
    }

    * {
      box-sizing: border-box;
    }
    html, body {
      margin: 0;
      font-size: 112.5%;
      font-family: "Frutiger Serif";
    }
    :root{
      --primary-color: #ff5a36
    }
`