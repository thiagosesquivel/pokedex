import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding :0;
    box-sizing: border-box;
    outline: 0;
    border: 0;
    font-family: 'Roboto', sans-serif;

}


html, body, #root{
    height: 100%;
    background: var(--cinza)

}

:root{
    --vermelho-forte:#D31613;
    --vermelho: #ef5350;
    --vermelho2: #F2706D;
    --branco : #fff;
    --cinza :#F7F7F7;
    --cinza2: #d6d6d6;
    --cinza3: #dddddd;
    --chumbo: #888;

    --preto:  #000;
     --laranja: #d35400;
    --azul: #4BA4DF;
    --azul2: #1B6696;
    --azul3 : #64B1E3;
}



`;
