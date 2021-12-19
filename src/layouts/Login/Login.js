import React from "react";
import styled from "styled-components";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;

  & .form-control:focus {
    border-color: #167bff;
    box-shadow: none;
  }

  & h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }

  & hr {
    background : #9a9a9a66;
  }
`

const AuthInner = styled.div`
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
`
function Login() {
  return (

    <Container fluid>
      <AuthWrapper>
        <AuthInner>
          <form>
            <h3>Company Name</h3>
            <hr size="8px" align="center" width="100%"/>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </form>
        </AuthInner>
      </AuthWrapper>
    </Container>
  );
}

export default Login;
