import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom'
import './css/main.css';

import search_img from './img/main_search_img.png';
import rmc_img from './img/main_rmc_img.jpg';
import mypage_img from './img/main_mypage_img.png';

const Main = () => {
  return (
    <div>
      <Header/>

      <div className="main_page">
        <div className="lecture">
          <Link to="./lecture">
          <img className="main_lecture_div" src={search_img} />
          </Link>
          <label className="main_title">강의찾기</label>
          <div>자신이 원하는 강의를 찾을 수 있습니다.</div>
        </div>
      
        <div className="rmc">
          <Link to="./Rmc">
          <img className="main_rmc_div" src={rmc_img} />
          </Link>
          <label className="main_title">롤문철게시판</label>
          <div>자신의 영상을 게시하여 한문철TV처럼 여러 사람들에게 평가를 받을 수 있습니다.</div>
        </div>

        <div className="mypage">
          <Link to="./Mypage_course_list">
          <img className="main_mypage_div" src={mypage_img} />
          </Link>
          <label className="main_title">마이페이지</label>
          <div>자신의 수강내역, 멘토 등록, lol 정보를 확인할 수 있습니다.</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
