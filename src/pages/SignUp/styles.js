import styled from "styled-components";
import { Input } from 'antd';


export const SignUpStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 452px;
    height: 570px;
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto;
    background-color: rgba(32, 32, 36, 0.65);
    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 26px;
        color: #FFFFFF;
        padding: 10px;
    }
    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 13px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 2.5px;
        margin-bottom: 2.5px
    }
    a {
        color: #8257E5;
        text-decoration: underline;
    }
    a:hover {
        cursor: pointer;
        filter: brightness(120%)
    }
    @media(max-width: 600px){
        width: 80%;
        height: 350px;
        height: 650px;
        h1{
            font-size:20px;
        }
    }
`

export const FormStyled = styled.form`
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    input {
        width: 318px;
        height: 38px;
        background: rgba(32, 32, 36, 0.65);
        border-radius: 9px;
        border: none;
        font-weight: 500;
        font-size: 18px;
        color: #DDDADA;
    }
    input::placeholder {
        font-weight: 500;
        font-size: 18px;
        color: #DDDADA;
    }
    button {
        font-family: 'Poppins', sans-serif;
        width: 318px;
        height: 45px;
        background: #633BBC;
        border: none;
        font-weight: 600;
        font-size: 22px;
        color: #FFFFFF;
        border-radius: 9px;
        transition: all 0.3s ease-in-out;
        @media(max-width: 600px){
        width: 80%;
        align-items: center;

    }
    }
    button:hover {
        background-color: #FFFFFF;
        color: #633BBC;
    }
    @media(max-width: 600px){
        width: 80%;
        align-items: center;

    }
`

export const InputStyled = styled(Input)`
    width: 318px;
    height: 38px;
    background: rgba(32, 32, 36, 1);
    border-radius: 9px;
    border: none;
    font-weight: 500;
    font-size: 18px;
    color: #DDDADA;
    ::placeholder {
        font-weight: 500;
        font-size: 18px;
        color: #DDDADA;
    }
    input {
        height: 30px;
    }
    :focus-within{
        .icon {
            color: #633BBC;
        }
        filter: brightness(120%)
    }
    :hover {
        .icon {
            color: #633BBC;
        }
        filter: brightness(120%)
    }
    @media(max-width: 600px){
        width: 80%;
    }
`

export const InputPassword = styled(Input.Password)`
    width: 318px;
    height: 38px;
    background: rgba(32, 32, 36, 1);
    border-radius: 9px;
    border: none;
    font-weight: 500;
    font-size: 18px;
    color: #DDDADA;
    ::placeholder {
        font-weight: 500;
        font-size: 18px;
        color: #DDDADA;
    }
    input {
        height: 30px;
    }
    :focus-within{
        .icon {
            color: #633BBC;
        }
        filter: brightness(120%)
    }
    :hover {
        .icon {
            color: #633BBC;
        }
        filter: brightness(120%)
    }
    @media(max-width: 600px){
        width: 80%;
    }
`