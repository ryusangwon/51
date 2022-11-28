import React, { useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';

import './css/rmcwrite.css';

const HandleWriteSubmit = async({body}) => {
  const headers = {
    'Content-Type' : 'application/json',
    'Authorization' : "Bearer cognito 의 access token"
  }

  const response = await axios.post('http://localhost:3001/rmc/write', body, {headers: headers}).then((response) => {
    console.log('status : '+response.status);
  }).catch((error) => {
    console.log('error : '+error);
  });
}

function RmcWrite() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [content, setContent] = useState('');

  const body = {
      title: title,
      content: content,
      file: file
    }

  const fileInput = React.useRef(null);
  
  const handleUploadClick = e => {
    fileInput.current.click();
  };

  const imageUpload = e => {
    const videoTpye = e.target.files[0].type.includes('video');

    setFile({
      url: URL.createObjectURL(e.target.files[0]),
      video: videoTpye,
    });
    console.log(videoTpye);
  };

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
        <div className="upload">
          <label className="video">동영상</label>
          <button className="file_upload" onClick={handleUploadClick}>파일 업로드</button>
          <input type="file"
            ref={fileInput}
            onChange={imageUpload}
            style={{ display: "none" }} />
            {file.video && <video src={file.url} controls width="500px" />}
        </div>
        <div className="rmc-view-row">
          <label>내용</label>
          <textarea className="content" onChange={(event) => setContent(event.target.value)}></textarea>
        </div>
    <button className="rmc-view-go-list-btn" onClick={() => HandleWriteSubmit({body})}>등록</button>
    </div>
    </>
    </div>
    );
}
  
export default RmcWrite;