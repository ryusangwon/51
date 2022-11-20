import React, { useEffect, useState } from 'react';
import Header from './Header';
import './css/mypage_regist_mentor.css';
import './css/mypage_side.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Mypage_regist_mentor = () => {
    const [flag, setFlag] = useState(false);

    let navigate = useNavigate();

    const send_btn = () => {

      axios.post('http://localhost:3001/mento/register', {
      mento_id : sessionStorage.getItem('login-token'),

      }).then((result)=>{
        console.log(result.data);
        if(result.data == 'message'){
          sessionStorage.setItem('mento', 1);
        }

      })


    }

    return (
      <div className="height_100_class">
        <Header/>

        <div className="mypage_back">
          <div className="mypage_side">
            <div className="mypage_side_account">
              {sessionStorage.getItem('login-token')}
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
                                <div className="points">멘토등록시 주의할 점<br/>1.<br/>2.<br/>3.<br/>4.<br/>5.<br/></div>
                                <input type="checkbox" id="regist_check" onChange={(event) => setFlag(flag => !flag)} /> 위 내용을 숙지하였습니다.
                                <input type="button" id="regist_button" value="멘토 등록" disabled={!flag} onClick={() => send_btn()}/>
                            </div>
                        </div>
                    </div>
          </div>
        </div>
      </div>

    );
  }

  export default Mypage_regist_mentor;
