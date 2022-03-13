import React, { useEffect, useState } from 'react';
import './LoginPage.css';
import axios from 'axios';

export default function LoginPage() {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });
  const HandleInputChange = (evt) => {
    setValue({
      ...value,
      [evt.target.name]: evt.target.value,
    });
  };
  const ValidateEmail = (email) => {
    if (!email) return 'Required';
    const IsValidateEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!IsValidateEmail) return 'InvalidEmail';
    return '';
  };
  const ValidatePasword = (password) => {
    if (!password) return 'Required';
    if (password.length < 8) return 'Password at least 8 chars';
    return '';
  };

  const error = {
    email: ValidateEmail(value.email),
    password: ValidatePasword(value.password),
  };
  const [token, setToken] = useState({
    tokenArray: '',
    id: '',
  });
  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://60dff0ba6b689e001788c858.mockapi.io/tokens`,
    }).then((response) => {
      setToken({
        tokenArray: response.data.token,
        id: response.data.userId,
      });
    });
  }, []);
  const [touch, setTouch] = useState({
    email: false,
    password: false,
  });
  const InputBlur = (evt) => {
    setTouch({
      ...touch,
      [evt.target.name]: true,
    });
  };
  const [showResults, setShowResults] = React.useState();
  const [rememberUser, setRememberUser] = useState(false);
  const HandleOnSubmit = (evt) => {
    setShowResults('Login Sucess');

    if (rememberUser) {
      localStorage.setItem('tokenArray', token.tokenArray);
      localStorage.setItem('id', token.id);
    } else {
      window.sessionStorage.setItem('tokenArray', token.tokenArray);
      window.sessionStorage.setItem('id', token.id);
    }
    window.location.reload();
  };
  const isFormInvalid = Boolean(error.email || error.password);
  return (
    <>
      <body id="particles-js"></body>
      <div class="animated bounceInDown">
        <div class="container">
          <span class="error animated tada" id="msg"></span>
          <form name="form1" class="box" onsubmit="return checkStuff()">
            <h4>
              Admin<span>Dashboard</span>
            </h4>
            <h5>Sign in to your account.</h5>
            <input
              type="text"
              name="email"
              placeholder="Email"
              autocomplete="off"
              label="Email"
              variant="filled"
              placeholder="Email"
              name="email"
              fullWidth
              value={value.email}
              onChange={HandleInputChange}
              onBlur={InputBlur}
            />
            {touch.email && (
              <p style={{ margin: '2px', display: 'block', color: 'blue' }}>
                {error.email}
              </p>
            )}
            <i class="typcn typcn-eye" id="eye"></i>
            <input
              type="password"
              name="password"
              placeholder="Passsword"
              id="pwd"
              autocomplete="off"
              value={value.password}
              onChange={HandleInputChange}
              onBlur={InputBlur}
              variant="filled"
              fullWidth
            />
            {touch.password && (
              <p style={{ margin: '20px', display: 'block', color: 'blue' }}>
                {error.password}
              </p>
            )}
            <input
              onClick={HandleOnSubmit}
              variant="contained"
              disabled={isFormInvalid}
              type="submit"
              value="Sign in"
              class="btn1"
            />
            {showResults}
          </form>
        </div>
      </div>
    </>
  );
}
