import React from 'react';
import { Link } from 'react-router-dom';
import './rmcheader.css';

const RmcHeader = props => {
  const { headersName, children } = props;

  return (
    <div className="rmc-header">
        <h2 align="left">롤문철</h2>
        <Link to='/rmc/write'>
            <button align="right" className="rmc-view-go-list-btn" >
            게시글 작성
            </button>
        </Link>
    </div>
  )
}

export default RmcHeader;