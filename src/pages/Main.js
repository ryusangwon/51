import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom'
import './css/main.css';

import search_img from './img/main_search_img.png';
import rmc_img from './img/main_rmc_img.jpg';
import mypage_img from './img/main_mypage_img.png';

const Main = () => {

  const goto_mypage = () => {
    if(!sessionStorage.getItem('login-token')){
      alert("로그인 후 이용가능합니다.");
      return;
    }
    window.location.href = "/mypage_course_list"
  }

  return (
    <div>
      <Header/>

      <Link to="./lecture">
      <img className="main_lecture_div" src={search_img} />
      </Link>

      <Link to="./Rmc">
      <img className="main_rmc_div" src={rmc_img} />
      </Link>


      <div onClick={()=>goto_mypage()}>
        <img className="main_mypage_div" src={mypage_img} />
      </div>
    </div>
  );
};

export default Main;
