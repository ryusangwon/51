import React from 'react';
import Header from './Header';
import './css/main.css';

import search_img from './img/main_search_img.png';
import rmc_img from './img/main_rmc_img.jpg';

const Main = () => {
  return (
    <div>
      <Header/>


      <img className="main_lecture_div" src={search_img}>

      </img>
      <img className="main_rmc_div" src={rmc_img}>

      </img>
      <img className="main_mypage_div">

      </img>
    </div>
  );
};

export default Main;
