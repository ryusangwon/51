import React, { useEffect, useState } from 'react';
import './css/header.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();

    const [login_flag, setLogin_flag] = useState(false);

  
    
    const rendering = () => {
      const result = [];
      
      if(!sessionStorage.getItem('login-token')){

        result.push(
          <div className="header_login_div">
            <div className="header_login" onClick={()=>navigate("/login")}>
              로그인
            </div>
            <div className="header_memberjoin" onClick={()=>navigate("/signup")}>
              회원가입
            </div>
          </div>
          );
      }else{
        result.push(
          <div className="header_login_div">
            <div className="header_login" onClick={() => logout_btn()}>
              로그아웃
            </div>
          </div>
          );
      }
      
      return result;
  
    };


    const logout_btn = () => {
      sessionStorage.setItem('login-token', '');
      setLogin_flag(false);
      navigate("/");
    }

    return (
        <div className="App-header">

        <div className="header_logo" onClick={() => navigate("/")}>
          고속도롤
        </div>

        <div className="header_menu_div">
          <div className="header_menu_lecture" onClick={()=>navigate("/lecture")}>
            강의찾기
          </div>
          <div className="header_menu_rmc" onClick={()=>navigate("/rmc")}>
            롤문철게시판
          </div>
          <div className="header_menu_mypage" onClick={()=>navigate("/mypage_course_list")}>
            마이페이지
          </div>
        </div>

        {rendering()}

      </div>
    );
};

export default Header;