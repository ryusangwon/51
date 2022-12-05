import React, { useEffect, useState } from 'react';
import Header from './Header';
import './css/lecture_modal.css';
import { useNavigate } from "react-router-dom";
import './css/lecture.css';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const Lecture_modal = ({open, close, closeModal, submit_click, selectId, select_title, select_lecture_time, select_price, select_lecture_description, select_mento_description, select_start_time}) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  //const { open, close, header } = props;

  //alert(selectId);
  console.log(selectId);
  console.log(select_title);
  console.log(select_lecture_time);
  console.log(select_price);
  console.log(select_lecture_description);
  console.log(select_mento_description);


  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <div className="modal_back">
          <div className="modal_back_btn" onClick={close}>
            종료
          </div>

          <div className="modal_inner_div">
          <div>
            강의제목
          </div>
          <div className="modal_text_div">
            {select_title}
          </div>

          <div>
            강의날짜
          </div>
          <div className="modal_text_div">
            {select_start_time}
          </div>

          <div>
            강의시간
          </div>
          <div className="modal_text_div">
            {select_lecture_time}
          </div>

          <div>
            가격
          </div>
          <div className="modal_text_div">
            {select_price}
          </div>

          <div>
            강의설명
          </div>
          <div className="modal_text_div">
            {select_lecture_description}
          </div>

          <div>
            멘토설명
          </div>
          <div className="modal_text_div">
            {select_mento_description}
          </div>

          </div>




          <div className="modal_submit_btn" onClick={submit_click}>
            강의신청
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Lecture_modal;
