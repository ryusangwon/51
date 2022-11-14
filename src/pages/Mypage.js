import React, { useEffect } from 'react';
import Header from './Header';
import './css/mypage.css';


const Mypage = () => {
  
    return (
      <div className="height_100_class">
        <Header/>

        <div className="mypage_back">
          <div className="mypage_side">
            <div>
              계정이름
            </div>
            <div>
              수강내역
            </div>
            <div>
              멘토 등록
            </div>
            <div>
              lol 정보
            </div>
          </div>

          <div className="mypage_content">
            <div>
              계정이름
            </div>
            <div>
              수강내역
            </div>
            <div>
              멘토 등록
            </div>
            <div>
              lol 정보
            </div>
          </div>
        </div>

        
      </div>
      
    );
  }

  export default Mypage;