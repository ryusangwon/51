import React, { useEffect, useState } from 'react';
import Header from './Header';
import './css/lecture_modal.css';
import { useNavigate } from "react-router-dom";
import './css/lecture.css';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Lecture_modal = ({open, close, closeModal, submit_click}) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  //const { open, close, header } = props;


  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <div className="modal_back">
          <div className="modal_back_btn">
            <button onClick={close}>종료</button>
          </div>

          <img className="modal_img"></img>



          <div className="modal_submit_btn">
            <button onClick={submit_click}>강의신청</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Lecture_modal;
