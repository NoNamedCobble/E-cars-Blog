const { createGlobalStyle } = require('styled-components');
const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;1,300;1,400&display=swap');

*,*::before,*::after{
    box-sizing:border-box;
    margin:0;
    padding:0;
}


html{
    font-size:10px;
}

body{
    margin:0;
    font-size:2rem;
    font-family:'Montserrat';

    /* &::after{
        content:'';
        position:absolute;
        left:0;
        top:0;
        width:55vw;
        height:100vh;
        background-color:${({ theme }) => theme.primary};
        z-index:-5;
    } */
}

a{
    text-decoration:none;
    color:inherit;
}

`;

export default GlobalStyles;
