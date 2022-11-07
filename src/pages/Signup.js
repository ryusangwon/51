import React, { useEffect } from 'react';
import Header from './Header';
import './css/signup.css';


const Signup = () => {

    return (
      <div>
        <Header/>

        <div className="signup-form">
            <form action="javascript:signup();">
                <input type="text" id="id" className="text-field" placeholder="아이디"></input>
                <input type="text" id="password" className="text-field" placeholder="비밀번호"></input>
                <input type="text" id="name" className="text-field" placeholder="이름"></input>
                <input type="submit" value="회원가입" className="submit-btn"/>
            </form>
        </div>

      </div>

    );
  }

  export default Signup;
