import React from 'react'
import styled from "styled-components"

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
    background-color: #f2ecec;
    border-radius: 10px;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Title = styled.h1`
    font-weight: 600;
    margin: auto;
    text-align: center;
`

const Input = styled.input`
    min-width: 30%;
    flex:1;
    padding: 1%;
    margin: 5px; /* Add margin for spacing between inputs */
`

const Agreement = styled.span`
    margin-bottom: 2%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
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
    font-size: 15px;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title> CREATE NEW ACCOUNT</Title>
            <Form>
                <Input placeholder="first name"/>
                <Input placeholder="last name"/> 
                <Input placeholder="user_name"/> 
                <Input placeholder="email" type='email'/> 
                <Input placeholder="password" type='password'/> 
                <Input placeholder="confirm password" type='password'/> 
                <Input placeholder="date" type='date'/> 
                <Input placeholder="location"/>
                <Agreement>I agree to sharing and processing of my data as per the privacy policy</Agreement> 
                <Button>Create Account</Button>   
            </Form>
        </Wrapper> 
    </Container>
  )
}

export default Register
