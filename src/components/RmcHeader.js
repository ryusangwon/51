import React from 'react';
import { Link } from 'react-router-dom';
import './rmcheader.css';

const RmcHeader = props => {
  const { headersName, children } = props;

  const goto_write = () => {
    if(!sessionStorage.getItem('login-token')){
      alert("로그인 후 이용가능합니다.");
      return;
    }
    window.location.href = "/rmc/write"
  }

  return (
    <div className="rmc-header">
        <h2 align="left">롤문철</h2>
            <button align="right" className="rmc-view-go-list-btn" onClick={()=>goto_write()}>
            게시글 작성
            </button>
    </div>
  )
}

export default RmcHeader;
