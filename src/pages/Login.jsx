import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("img/bg22.webp");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  // background-color:white;
  ${mobile({
    width: "95%",
  })}
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 20px 0px;
  &:disabled{
      color:green;
    cursor:not-allowed;
  }
`;
const Link = styled.a`
  margin: 5px 0px;
`;
const Error = styled.span`
color:red;
`;

const Login = () => {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  console.log(error);
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password }).then((res)=>{
      console.log(res);
      
      navigate('/');

    })
  //  console.log(res);
  //    if(res){
  //    }

  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Something went wrong... </Error>}
          <Link>DO NOT REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
