import React from 'react';
import './css/header.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();


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

        <div className="header_login_div">
          <div className="header_login" onClick={()=>navigate("/login")}>
            로그인
          </div>
          <div className="header_memberjoin" onClick={()=>navigate("/signup")}>
            회원가입
          </div>
        </div>

      </div>
    );
};

export default Header;