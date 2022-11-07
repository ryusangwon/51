import React, { useEffect } from 'react';
import Header from './Header';
import './css/mypage_lol_info.css';
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  let navigate = useNavigate();
  
    return (
      <div>
        <Header/>
        
        <div class="mypage_background">
            <section class="mypage_container">
                <aside class="sidebar">
                    <div class="sidebar_userinfo">
                        <div class="user_name">
                            <span class="name">계정이름</span>
                        </div>
                    </div>
                    <div class="sidebar_usermenu">
                        <ul class="menu_list">
                            <li className="item" data-page="course_list" onClick={()=>navigate("/mypage_course_list")}>수강 내역</li>
                            <li className="item" data-page="regist_mentor" onClick={()=>navigate("/mypage_regist_mentor")}>멘토 등록</li>
                            <li className="item" data-page="lol_info" onClick={()=>navigate("/mypage_lol_info")}>lol 정보</li>
                        </ul>
                    </div>
                </aside>
            </section>
        </div>
      </div>
      
    );
  }

  export default Mypage;