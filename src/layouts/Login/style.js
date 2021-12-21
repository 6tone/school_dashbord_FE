import styled from "styled-components";
export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  height: 80vh;

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
export const AuthInner = styled.div`
  width: 450px;
  margin: auto;
  background: #21252926;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
`
export const BtnGroup = styled.div`
  display: flex;
  justify-content:space-around;
`
export const InputStyle = styled.input`
  border: 1px solid #9E9E9E !important;
`
