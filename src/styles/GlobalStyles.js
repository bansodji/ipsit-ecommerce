import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

body {
  margin: 0;
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; */
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fafafa;
}

.theme1{
    color: ${({theme})=> theme.colors.theme1};
}
.theme1a{
    color: ${({theme})=> theme.colors.theme1a};
}
.theme1-bg{
    background-color: ${({theme})=> theme.colors.theme1};
}
.theme1a-bg{
    background-color: ${({theme})=> theme.colors.theme1a};
}

.fff{color:#fff;}
.fff-bg{background-color:#fff;}

a{
    text-decoration: none;
    cursor: pointer;
    color: inherit;
}

ul{
    margin: 0;
    padding: 0;
    li{
        list-style: none;
        margin: 0;
    }
}

.font-100{font-weight:100}
.font-200{font-weight:200}
.font-300{font-weight:300}
.font-400{font-weight:400}
.font-500{font-weight:500}
.font-600{font-weight:600}
.font-700{font-weight:700}
.font-800{font-weight:800}
.font-900{font-weight:900}

.space-1{letter-spacing:1px};
.space-2{letter-spacing:2px};
.space-3{letter-spacing:3px};
.space-4{letter-spacing:4px};

.audio{
    font-family: 'Audiowide', cursive;
}

.uppercase{text-transform:uppercase}

.lowercase{text-transform: lowercase}

.title{text-transform: capitalize}

.cursor-pointer{cursor:pointer}

.social-links-wrapper {
    display: flex;
    .social-link {
        width: 40px;
        height: 40px;
        font-size: 1rem;
        display: grid;
        place-items: center;
        border-radius: 50%;
        background-color: #fff;
        color: ${({theme})=> theme.colors.footer};
        position: relative;
        transition: ${({theme})=> theme.other.transitionFast};

        &::after{
            content: "";
            position: absolute;
            width: 40px;
            height: 40px;
            border: 2px solid #fff;
            border-radius: 50%;
            transition: ${({theme})=> theme.other.transitionFast};
        }

        &:hover{
            &::after{
                content: "";
                position: absolute;
                width: 55px;
                height: 55px;
                border: 2px solid #fff;
                border-radius: 50%;
                transition: ${({theme})=> theme.other.transitionFast};
            }
        }
        
    }
}

.f-border-1{
    border: 1px solid ${({ theme }) => theme.colors.theme1};
}

.f-border-2{
    border: 2px solid ${({ theme }) => theme.colors.theme1};
}

.flex-wrap{flex-wrap: wrap;}

.ip-box{
    background-color:#fff;
    border-radius: 16px;
    box-shadow: 0px 0px 41px -8px ${({theme})=>theme.other.boxShadow};
}
`;