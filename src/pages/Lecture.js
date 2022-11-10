import React, { useEffect, useState } from 'react';
import Header from './Header';
import './css/lecture.css';


const Lecture = () => {

  const [search, setSearch] = useState('');

  const rendering = () => {
    const result = [];
    for (let i = 0; i < 8; i++) {
      result.push(
    <div class="box-init box">
      <img className="box_init_img"></img>

      <div className="box_init_div_id">
        아이디 / 티어
      </div>
      <div className="box_init_div_title">
        강의제목 테스트
      </div>
      <div className="box_init_div_time">
        100분 3000point
      </div>
    </div>
    );
    }
    return result;

  };

  const search_btn = () => {
    alert(search);
  }

  const regist_btn = () => {
    
  }
  
    return (
      <div className="height_100_class">
        <Header/>

        <div className="lecture_background">
          <div className="lecture_search_div">
            <input className = "lecture_search_input" type="text" name="search" placeholder="검색" onChange={(event) => setSearch(event.target.value)}/>
            <button className = "lecture_search_btn" type="button" onClick={() => search_btn()}>검색</button>
          </div>

          <div className="lecture_regist_btn_div">
            <button className = "lecture_regist_btn" type="button" onClick={()=>navigate("/lecture_regist")}>강의등록</button>
          </div>


          <div class="lecture_grid-init grid">
            {rendering()}
          </div>


        </div>

      </div>
      
    );
  }

  export default Lecture;