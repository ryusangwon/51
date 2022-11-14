import React, { useEffect } from 'react';
import Header from './Header';
import './css/mypage_course_list.css';
import { useNavigate } from "react-router-dom";

const Mypage_course_list = () => {
  let navigate = useNavigate();
  
    return (

      <div className="height_100_class">
        <Header/>

        <div className="mypage_back">
        <div className="mypage_side">
            <div className="mypage_side_account">
              Tester
            </div>
            <div className="mypage_side_divide">

            </div>
            <div className="mypage_side_menu" onClick={()=>navigate("/mypage_course_list")}>
              수강내역
            </div>
            <div className="mypage_side_menu" onClick={()=>navigate("/mypage_regist_mentor")}>
              멘토 등록
            </div>
            <div className="mypage_side_menu" onClick={()=>navigate("/mypage_lol_info")}>
              lol 정보
            </div>
          </div>

          <div className="mypage_content">
            <div className="course">
              <div className="learning">수강중인 강의</div>
                <div className="learning_box">
                  <table className="learning_table">
                    <tr>
                      <td className="learning_table_num_td">번호</td>
                      <td className="learning_table_title_td">강의제목</td>
                      <td classname="learning_table_date_td">일자</td>
                      <td><input type="button" id="regist_button" className="learning_table_button" value="강의실입장" /></td>
                    </tr>

                    <tr>
                      <td className="learning_table_num_td">번호</td>
                      <td className="learning_table_title_td">강의제목</td>
                      <td classname="learning_table_date_td">일자</td>
                      <td><input type="button" id="regist_button" className="learning_table_button" value="강의실입장" /></td>
                    </tr>

                    <tr>
                      <td className="learning_table_num_td">번호</td>
                      <td className="learning_table_title_td">강의제목</td>
                      <td classname="learning_table_date_td">일자</td>
                      <td><input type="button" id="regist_button" className="learning_table_button" value="강의실입장" /></td>
                    </tr>
                  </table>
                </div>
                <div className="learned">수강완료한 강의</div>
                <div className="learned_box">
                <table className="learning_table">
                    <tr>
                      <td className="learning_table_num_td">번호</td>
                      <td className="learning_table_title_td">강의제목</td>
                      <td classname="learning_table_date_td">일자</td>
                      
                    </tr>

                    <tr>
                      <td className="learning_table_num_td">번호</td>
                      <td className="learning_table_title_td">강의제목</td>
                      <td classname="learning_table_date_td">일자</td>
                      
                    </tr>

                    <tr>
                      <td className="learning_table_num_td">번호</td>
                      <td className="learning_table_title_td">강의제목</td>
                      <td classname="learning_table_date_td">일자</td>
                    
                    </tr>
                  </table>
                </div>
              </div>
            </div>
        </div>

        
      </div>
      
    );
  }

  export default Mypage_course_list;