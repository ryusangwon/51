import './css/rmcview.css';

import React, { useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';

import './css/rmcquestion.css';

function GetCategory() {
  const [category, setCategory] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/user/').then((response)=> {
      setCategory(response.data);
    })
  }, []);

  const categories = (Object.values(category)).map((item) => (
    <option key={item.id} value={item.id}>
      {item.displayName}
    </option>
  ));

  return categories;
}

const HandleQuestionSubmit = async({body}) => {
  const headers = {
    'Content-Type' : 'application/json',
    'Authorization' : "Bearer cognito 의 access token"
  }

  const response = await axios.post('http://localhost:3001/user/', body, {headers: headers}).then((response) => {
    console.log('status : '+response.status);
  }).catch((error) => {
    console.log('error : '+error);
  });
}

function RmcQuestion() {
  const categories = GetCategory();

  const [categoryId, setCategoryId] = useState(1);
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [stationId, setStationId] = useState('ST-4');

  const body = {
      categoryId : categoryId,
      title: title,
      content: content,
      email: email,
      stationId: stationId
    }

  return (
    <div classname="height_100_class">
    <Header/>
  <>
    <h2 align="center">게시글 작성</h2>
    <div className="rmc-view-wrapper">
        <div className="rmc-view-row">
            <label>문의 유형</label>
            <select onChange={(event) => setCategoryId(parseInt(event.target.value))}>
              {categories}
            </select>
        </div>
        <div className="rmc-view-row">
            <label>email</label>
            <input onChange={(event) => setEmail(event.target.value)}></input>
        </div>
        <div className="rmc-view-row">
            <label>제목</label>
            <input onChange={(event) => setTitle(event.target.value)}></input>
        </div>
        <div className="rmc-view-row">
            <label>내용</label>
            <textarea onChange={(event) => setContent(event.target.value)}></textarea>
        </div>
    <button className="rmc-view-go-list-btn" onClick={() => HandleQuestionSubmit({body})}>등록</button>
    </div>
    </>
    </div>
    );
}
  
export default RmcQuestion;