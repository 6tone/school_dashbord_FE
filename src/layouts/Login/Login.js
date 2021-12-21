import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { AuthWrapper, AuthInner, BtnGroup, InputStyle } from './style'
import { login } from '../../middleware/API'
import { setToken } from '../../middleware/utils'
import { useHistory } from 'react-router-dom'

function Login() {

  const [subData, setSubData] = useState({})
  const history = useHistory()
  const handleChange = e => {
    let newState = JSON.parse(JSON.stringify(subData))
    newState[e.target.name] = e.target.value
    setSubData(newState)
  }

  const handleLogin = () => {
    const {account, password} = subData
    if(!account || !password) {
      alert('請輸入帳號或密碼')
      return
    }
    login(account, password).then(data => {
      if(!data.ok) return alert('fail')
      const token = data.token
      setToken(token)
      history.push('/')
    })
  }

  return (
      <AuthWrapper>
        <AuthInner>
          <form>
            <h3>Company Name</h3>
            <hr size="8px" align="center" width="100%"/>
            <div className="form-group">
                <label>帳號</label>
                <InputStyle type="email" className="form-control" placeholder="Enter email" name="account" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label>密碼</label>
                <InputStyle type="password" className="form-control" placeholder="Enter password" name="password" onChange={handleChange}/>
            </div>
            <BtnGroup>
              <Button variant="primary" onClick={() => console.log(subData)}>登入</Button>
              <Button variant="success">註冊</Button>
            </BtnGroup>
          </form>
        </AuthInner>
      </AuthWrapper>
  );
}

export default Login;
