import React, { useEffect } from 'react';
import Header from './Header';
import './css/mypage_course_list.css';
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  let navigate = useNavigate();
  
    return (
      <div>
        <Header/>
        
        <div className="mypage_background">
            <section className="mypage_container">
                <aside className="sidebar">
                    <div clclassNameass="sidebar_userinfo">
                        <div className="user_name">
                            <span className="name">계정이름</span>
                        </div>
                    </div>
                    <div className="sidebar_usermenu">
                        <ul className="menu_list">
                            <li className="item" data-page="course_list" onClick={()=>navigate("/mypage_course_list")}>수강 내역</li>
                            <li className="item" data-page="regist_mentor" onClick={()=>navigate("/mypage_regist_mentor")}>멘토 등록</li>
                            <li className="item" data-page="lol_info" onClick={()=>navigate("/mypage_lol_info")}>lol 정보</li>
                        </ul>
                    </div>
                </aside>
                <div className="main_common">
                    <div className="mypage_course_list">
                        <div className="manage">
                            <div className="course">
                                <div className="learning">수강중인 강의</div>
                                <div className="learning_box"></div>
                                <div className="learned">수강완료한 강의</div>
                                <div className="learned_box"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
      
    );
  }

  export default Mypage;