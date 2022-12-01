import './css/rmcview.css';

import React, { useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';

import './css/rmcwrite.css';



function Rmcwrite() {

  const [title, setTitle] = useState('');
  const [video, setVideo] = useState('');
  const [content, setContent] = useState('');

  const body = {
      title: title,
      content: content,
      video: video,
    }


    const send_btn = () => {

      console.log(sessionStorage.getItem('login-token'));
      console.log(title);
      console.log(content);
      console.log(video);

      axios.post('http://localhost:3001/rmc/create', {
        gosok_id: sessionStorage.getItem('login-token'),
        title: title,
        content: content,
        video_src: video


        }).then((result)=>{
          console.log(result);
          window.location.href = "/rmc"
        })

    }



  return (
    <div classname="height_100_class">
    <Header/>
  <>
    <h2 align="center">게시글 작성</h2>
    <div className="rmc-view-wrapper">
        <div className="rmc-view-row">
            <label>제목</label>
            <input onChange={(event) => setTitle(event.target.value)}></input>
        </div>
        <div className="rmc-view-row">
            <label>유튜브 링크</label>
            <input onChange={(event) => setVideo(event.target.value)}></input>
        </div>
        <div className="rmc-view-row">
            <label>내용</label>
            <textarea onChange={(event) => setContent(event.target.value)}></textarea>
        </div>
    <button className="rmc-view-go-list-btn" onClick={() => send_btn()}>등록</button>
    </div>
    </>
    </div>
    );
}

export default Rmcwrite;
