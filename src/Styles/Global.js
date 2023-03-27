import { createGlobalStyle } from "styled-components";
export const GlobalStyle=createGlobalStyle`

body{
    background:violet;
    padding:0;
    margin:0;
    transition: all 0.25s linear;
}


.canvas{
    diplay:grid; 
    grid-auto-flow: row;
    grid-template-row: auto 1fr auto;
    min-height: 100vh;
    gap: 0.5rem;
    padding:1rem;
    align-items: center;
}
.typewritter{
    display:block;
    max-width:1000px;
    height:140px;
    position:relative;
    margin-left:auto;
    margin-right: auto;

}

.words{
    font-size:20px;
    display:flex;
    flex-wrap: wrap;
    align-content: center;
}
.word{
    margin:2px;
    padding-right:2px;
}
.footer{
   width:1000px;
   margin:auto;
}
.hiddeninput{
    opacity:0;
    width:100vw;
}
.gapping{
    margin-bottom:10vh;
}
.correct{
    color:green;

}

.incorrect{
    color:red;
}
`;