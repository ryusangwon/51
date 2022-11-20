import React, { useEffect, useState } from 'react';
import Header from './Header';
import './css/login.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Login = () => {

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  let navigate = useNavigate();

  const send_btn = () => {
    
    axios.post('http://localhost:3001/user/login', {
      id : id,
      password : pw,

    }).then((result)=>{
      //console.log(result);
      //console.log(result.data);
      
      if(result.data.length != 0){
        sessionStorage.setItem('login-token', id);

        navigate("/");
      }else{
        alert('로그인 실패');
      }
      
    })
    
  }

    return (
      <div>
        <Header/>

        <div className="login-wrapper">
            <div className="login_form">
                <input id="LOGIN_ID" className = "login_text" type="text" name="id" placeholder="아이디" onChange={(event) => setId(event.target.value)}/>
                <input id="LOGIN_PW" className = "login_text" type="password" name="id" placeholder="비밀번호" onChange={(event) => setPw(event.target.value)}/>
                <button id="LOGIN_BTN" className = "login_btn" type="button" onClick={() => send_btn()}>로그인</button>
            </div>
        </div>
      </div>
    );
  }

  export default Login;