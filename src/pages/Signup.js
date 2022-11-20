import React, { useEffect, useState } from 'react';
import Header from './Header';
import './css/signup.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Signup = () => {
  let navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [check_pw, setCheck_Pw] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [pwflag, setPwflag] = useState(false);
  const [emailflag, setEmailflag] = useState(false);

  const send_btn = () => {

    if(!pwflag){
      alert('비밀번호는 8글자 이상이어야 합니다.');
      return;
    }else if(!emailflag){
      alert('이메일 형식이 맞지 않습니다.');
      return;
    }else if(pw != check_pw){
      alert('입력한 비밀번호가 일치하지 않습니다.');
    }

    axios.post('http://localhost:3001/user/signup', {
      gosok_id : id,
      name : name,
      password : pw,
      email : email,
      mento : 0,
      }).then((result)=>{
        console.log(result);
        /*
        if(result.data.length!=0){
          alert('회원가입이 완료되었습니다.');
          navigate("/login");
        }
        */
      })

  }

  const pw_change = (value) => {
    if(value.length >= 8){
      setPw(value);
      setPwflag(true);
    }
  };

  const email_change = (value) => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if(emailRegex.test(value)){
      setEmail(value);
      setEmailflag(true);
    }


  };



    return (
      <div>
        <Header/>

        <div className="signup-form">
            <form action="javascript:signup();">
                <input type="text" id="id" className="text-field" placeholder="아이디" onChange={(event) => setId(event.target.value)}></input>
                <input type="password" id="password" className="text-field" placeholder="비밀번호" onChange={(e) => pw_change(e.target.value)}></input>
                <input type="password" id="password" className="text-field" placeholder="비밀번호 확인" onChange={(e) => setCheck_Pw(e.target.value)}></input>
                <input type="text" id="name" className="text-field" placeholder="이름" onChange={(event) => setName(event.target.value)}></input>
                <input type="text" id="email" className="text-field" placeholder="이메일" onChange={(e) => email_change(e.target.value)}></input>
            </form>
            <button value="회원가입" className="login_btn" onClick={() => send_btn()}>회원가입</button>
        </div>

      </div>

    );
  }

  export default Signup;
