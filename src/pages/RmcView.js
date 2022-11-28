import React, { useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './css/rmcview.css';

function GetData(rmcId) {
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/rmc/search/'+rmcId).then((response)=> {
        setQuestion(response.data.question);
        setAnswer(response.data.answer);
    })
  }, []);

  const item =  (<>
    <h2 align="center">게시글 상세정보</h2>
    <div className="rmc-view-wrapper">
        <div className="rmc-view-row">
            <label>게시글 번호</label>
            <label>{ question.id }</label>
        </div>
        <div className="rmc-view-row">
            <label>제목</label>
            <label>{ question.title }</label>
        </div>
        <div className="rmc-view-row">
            <label>작성일</label>
            <label>{ question.createDate }</label>
        </div>
        <div className="rmc-view-row">
            <label>내용</label>
            <div>
                {
                question.content
                }
            </div>
        </div>
    </div></>)

    return item;
}

function RmcView() {
  const{rmcId} = useParams();
  const item = GetData(rmcId);

  return (
    <div classname="height_100_class">
      <Header/>
      <>
        <div>
            {item}
        </div>
      </>
    </div>
  );
}
  
export default RmcView;