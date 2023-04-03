import { createGlobalStyle } from "styled-components";
export const GlobalStyle=createGlobalStyle`

body{
    background:black;
    padding:0;
    margin:0;
    transition: all 0.25s linear;
    color:white;
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
    color:lightgreen;

}

.incorrect{
    color:red;
}

.nowinone{
    border-left:1px solid;
    animation:blinking 2s infinite;
    animation-timing-function:ease;
    @keyframes blinking {
        0% {border-left-color:violet;}
        25% {border-left-color:black;}
        50% {border-left-color: violet;}
        75% {border-left-color:black;}
        100% {border-left-color:violet;}
    }
}
.left{
    border-right:1px solid;
    animation:blinkingRight 2s infinite;
    animation-timing-function:ease; 
    @keyframes blinkingRight {
        0% {border-right-color:violet;}
        25% {border-right-color:black;}
        50% {border-right-color: violet;}
        75% {border-right-color:black;}
        100% {border-right-color:violet;}
    }
}

.upper-menu{
    display:flex;
    max-width:1000px;
    margin-left:auto;
    margin-right: auto;
    justify-content:space-between;
    font-size:20px;
}
.time-modes{
display:flex;
}
.time{
    margin-right:15px;
    cursor:pointer;

}
.time:hover{
    color:yellow;

}

.statbox{
    display:flex;
    max-width:1000px;
    height:auto;
    margin-left:auto;
    margin-right: auto;
}
.left-stats{
    width:30%;
    padding:30px;
}

.right-stats{
    width:70%;
}

.title{
    font-size:20px;
    color:grey;
   
}

.subtitle{
    font-size:35px;
    color:gold;
    margin-bottom:15px;
}
`;