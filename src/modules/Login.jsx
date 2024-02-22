import React,{ useState }from 'react'
import styled from "styled-components"
import {mobile,tablet} from "../Responsive";

const Container = styled.div`
    width:100vw;
    height: 100vh;
    background: rgb(161,228,235);
    background: linear-gradient(0deg, #b8f1f7 42%, rgba(219, 211, 252, 0.987) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding:10%;
    background-color: white;
    border-radius: 10px;
    ${mobile({width: "60%",height:"40%"})}
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-weight: 600;
    margin: auto;
    text-align: center;
    ${mobile({fontSize: "40px"})}
    ${tablet({fontSize: "50px"})}
    font-size: 60px;
`

const Input = styled.input`
    min-width: 30%;
    flex:1;
    padding: 1%;
    margin: 5px; /* Add margin for spacing between inputs */
    ${mobile({fontSize: "20px"})}
    ${tablet({fontSize: "25px"})}
    font-size: 30px;
`
const Link = styled.a`
    margin: 10px 0px;
    font-size: 20px;
    ${tablet({fontSize: "15px"})}
    ${mobile({fontSize: "15px"})}
    text-decoration: underline;
    cursor: pointer;
`

const Button = styled.button`
    margin: auto;
    padding: 1%;
    width: 30%;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: #E04D83;
    color: whitesmoke;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
    ${mobile({width: "50%",fontSize:"20px"})}
    ${tablet({Width: "60%",fontSize:"20px"})}
`


const Login = () => {
  
  return (
    <Container>
        <Wrapper>
            <Title> SIGN IN</Title>
            <Form> 
                <Input placeholder="user_name"/> 
                <Input placeholder="password" type='password'/> 
                <Button>Sign In</Button>   
                <Link>Forgot Password</Link>
            </Form>
        </Wrapper> 
    </Container>
  )
}

export default Login