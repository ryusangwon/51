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

      console.log(result);
      /*
      onsole.log(result.data);c

      if(result.data.length != 0){
        sessionStorage.setItem('login-token', id);

        navigate("/");
      }else{
        alert('로그인 실패');
      }
      */

      if(result.data=="로그인 실패."){
        alert(result.data);
        //login_success();
      }else{
        //login_success();

        //if(result.data[0].gosok_id)
        sessionStorage.setItem('user_id', result.data.id);
        sessionStorage.setItem('login-token', result.data.gosok_id);
        if(result.data.mento){
          sessionStorage.setItem('mento', 0);
        }else {
          sessionStorage.setItem('mento', 1);
        }
          sessionStorage.setItem('point', result.data.point);

          navigate("/");
      }
      //console.log(result.data);

      //login_success();


    })

  }

  const login_success = () => {
    console.log(id);
    axios.post('http://localhost:3001/user/ismento', {
      id : id,
    }).then((result)=>{
      console.log(result.data);

      if(result.data == "mento"){
        sessionStorage.setItem('login-token', id);
        sessionStorage.setItem('mento', 0);

        navigate("/");
      }else if(result.data == "no mento"){
        sessionStorage.setItem('login-token', id);
        sessionStorage.setItem('mento', 1);

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
