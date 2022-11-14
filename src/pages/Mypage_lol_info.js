import React, { useEffect } from 'react';
import Header from './Header';
import './css/mypage_lol_info.css';
import { useNavigate } from "react-router-dom";

const Mypage_lol_info = () => {
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
                    <div className="mypage_regist_mentor">
                        <div className="manage">
                            <div className="mentor">
                                <input type="text" id="input_game_id" placeholder='게임아이디' />
                                <input type="button" id="regist_button" value="검색" />
                            </div>
                        </div>
                    </div>  
          </div>
        </div>
      </div>
    );
  }

  export default Mypage_lol_info;