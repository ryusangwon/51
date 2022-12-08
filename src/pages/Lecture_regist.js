import React, { useEffect, useState } from 'react';
import Header from './Header';
//import './css/lecture.css';
import './css/lecture_regist.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


const Lecture_regist = () => {

  const [lecture_title, setLecture_title] = useState('');
  const [lecture_duration, setLecture_duration] = useState('');
  const [lecture_price, setLecture_price] = useState('');
  const [lecture_date, setLecture_date] = useState('');
  const [lecture_info, setLecture_info] = useState('');
  const [mento_info, setMento_info] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  const rendering = () => {


  };

  const send_btn = () => {

    //user_id, title, mento_description, lecture_description, lecture_time, price, start_time, menti_in

    axios.post('http://localhost:3001/lecture/newLecture', {
      user_id : sessionStorage.getItem('login-token'),
      title : lecture_title,
      lecture_description : lecture_info,
      mento_description : mento_info,
      lecture_time : lecture_duration,
      start_time : startDate,
      price : lecture_price,
      menti_in : 0,
      }).then((result)=>{
        console.log(result);
        window.location.href = "/lecture"
      })


  }

  const regist_btn = () => {

  }

    return (
      <div className="height_100_class">
        <Header/>

        <div className="login-wrapper">
            <div className="regist_form">
                <div>
                  강의제목
                </div>
                <input id="LOGIN_ID" className = "long_text" type="text" name="id" onChange={(event) => setLecture_title(event.target.value)}/>


                <div>
                  <div className="short_inline_div1">
                    <div>
                      강의날짜
                    </div>

                    <div>
                    <DatePicker className="short_text"
                      selected={startDate}
                     locale="ko"
                     dateFormat="yyyy년 MM월 dd일 HH:mm:ss"
                     startDate={new Date()}
                     onChange={(date) => setStartDate(date)}
                     showTimeSelect
                     timeFormat="HH:mm"
                     timeIntervals={10}
                     timeCaption="time"
                      ></DatePicker>

                  </div>

                  </div>

                  <div className="short_inline_div2">
                    <div>
                      강의시간
                    </div>
                    <input id="LOGIN_ID" className = "short_text" type="text" name="id" onChange={(event) => setLecture_duration(event.target.value)}/>
                  </div>

                </div>


                <div className="short_inline_div1">
                  <div>
                    가격
                  </div>
                  <input id="LOGIN_ID" className = "short_text" type="text" name="id" onChange={(event) => setLecture_price(event.target.value)}/>
                </div>

                <div>
                  강의설명
                </div>
                <textarea className="regist_textarea" cols="100" rows="11"
                    onChange={(e) => setLecture_info(e.target.value) }>
                  </textarea>


                <div>
                  멘토정보
                </div>
                <textarea className="regist_textarea" cols="100" rows="11"
                    onChange={(e) => setMento_info(e.target.value) }>
                  </textarea>



                <button id="LOGIN_BTN" className = "login_btn" type="button" onClick={() => send_btn()}>강의등록</button>
            </div>
        </div>
      </div>


    );
  }

  export default Lecture_regist;
