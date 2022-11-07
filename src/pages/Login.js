import React, { useEffect } from 'react';
import Header from './Header';
import './css/login.css';


const Login = () => {

    return (
      <div>
        <Header/>

        <div className="login-wrapper">
            <div className="login_form">
                <input id="LOGIN_ID" className = "login_text" type="text" name="id" placeholder="아이디"/>
                <input id="LOGIN_PW" className = "login_text" type="password" name="id" placeholder="비밀번호"/>
                <button id="LOGIN_BTN" className = "login_btn" type="button">로그인</button>
            </div>
        </div>

      </div>

    );
  }

  export default Login;
