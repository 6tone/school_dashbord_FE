import React, { Component, useState, useEffect } from "react";
import { useLocation , Route, Redirect} from "react-router-dom";
import { Spinner } from "react-bootstrap";

export default function PrivateRoute(props) {
  const [isLoading, setLoading] = useState(true)
  const [isAuthed, setAuthed] = useState(+window.localStorage.getItem("isLogin"))
  const {component: Component, ...rest} = props
  useEffect(() => {
    console.log('useEffect')
    setAuthed(+window.localStorage.getItem("isLogin"))
    setLoading(false)

  },[props])
  console.log( isAuthed)
  return (
    isLoading ? <Spinner animation="border" role="status"/> :
    <Route {...rest} render={props => (
      isAuthed
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
  )
}

