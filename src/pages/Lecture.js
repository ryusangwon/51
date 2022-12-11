import React, { useEffect, useState } from 'react';
import Header from './Header';
import './css/lecture.css';
import { useNavigate } from "react-router-dom";
import Modal from './Lecture_modal.js';
import axios from 'axios';
import jpg_1 from './img/1.jpg';
import jpg_2 from './img/2.jpg';
import jpg_3 from './img/3.jpg';
import jpg_4 from './img/4.jpg';
import jpg_5 from './img/5.jpg';
import jpg_6 from './img/6.jpg';
import jpg_7 from './img/7.jpg';
import jpg_8 from './img/8.jpg';
import jpg_9 from './img/9.jpg';
import jpg_10 from './img/10.jpg';

const Lecture = () => {
  let navigate = useNavigate();

  const [select_id, setSelect_id] = useState('');
  const [search, setSearch] = useState('');
  const [ result, setResult ] = React.useState([]);
  const [ result_total, setResult_total ] = React.useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const [server_flag, setServer_flag] = useState(false);

  const [selected_line, setSelected_line] = useState('');
  const [selected_tier, setSelected_tier] = useState('');
  const [selected_sort, setSelected_sort] = useState('');


  const [select_title, setSelect_title] = useState('');
  const [select_lecture_time, setSelect_lecture_time] = useState('');
  const [select_price, setSelect_price] = useState('');
  const [select_lecture_description, setSelect_lecture_description] = useState('');
  const [select_mento_description, setSelect_mento_description] = useState('');
  const [select_start_time, setSelect_start_time] = useState('');

  const [sort_state, setSort_state] = useState(0);
  //let img_count = 1;
  //const [img , setImg] = useState('jpg_1');

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    //window.location.reload();
  };

  const submit_click = () => {
    //alert('test');
    //alert(select_id);
    closeModal();
    for(var i=0; i<result.length; i++){
      if(result[i].id == select_id){
        if(result[i].menti_in != null){
          alert('신청할 수 없는 강의입니다.');
          return;
        }
      }
    }


    axios.post('http://localhost:3001/lecture/applyLecture', {
      user_id : sessionStorage.getItem('user_id'),
      lecture_id : select_id,

    }).then((result)=>{
      console.log(result);
      if(result.data=='Not enough money'){
        alert("포인트가 부족합니다");
        return;
      }else{
        sessionStorage.setItem('point', result.data);
        async_function();
      }
    })


    /*
    const new_result = [];

    axios.post('http://localhost:3001/lecture/existMenti', {
      id : select_id,

    }).then((result)=>{
      async_function();
    })
    */

  };

  const select_modal = (id) => {
    if(!sessionStorage.getItem('login-token')){
      alert("로그인 후 이용가능합니다.");
      return;
    }
    //setSelect_id(id);
    //console.log(result);
    for(var i=0; i< result.length; i++){
      if(id == result[i].lecture_id){
        setSelect_id(result[i].lecture_id);
        setSelect_title(result[i].title);
        setSelect_lecture_time(result[i].lecture_time);
        setSelect_price(result[i].price);
        setSelect_lecture_description(result[i].lecture_description);
        setSelect_mento_description(result[i].mento_description);
        setSelect_start_time(result[i].start_time);
        break;
      }
    }
    openModal();
  };


    const async_function = async () => {
    // run asynchronous tasks here
    try{
        const res = await axios.get('http://localhost:3001/lecture/getLecture')
        // 받아온 데이터를 useState 를 이용하여 선언한다.

        for(var i=0; i<res.data.length; i++){
          var count = i%10;
          switch(count){
            case 0:
              res.data[i].img_url = jpg_1;
            break;
            case 1:
              res.data[i].img_url = jpg_2;
            break;
            case 2:
              res.data[i].img_url = jpg_3;
            break;
            case 3:
              res.data[i].img_url = jpg_4;
            break;
            case 4:
              res.data[i].img_url = jpg_5;
            break;
            case 5:
              res.data[i].img_url = jpg_6;
            break;
            case 6:
              res.data[i].img_url = jpg_7;
            break;
            case 7:
              res.data[i].img_url = jpg_8;
            break;
            case 8:
              res.data[i].img_url = jpg_9;
            break;
            case 9:
              res.data[i].img_url = jpg_10;
            break;
          }
        }
        setResult(res.data);
        setResult_total(res.data);
        setServer_flag(true);

        console.log(res.data);

    } catch(e) {
        console.error(e.message);
    }
    };

    useEffect(() => {
      if(!server_flag){
          async_function();
      }
    });

/*
  const rendering = () => {
    const result = [];
    for (let i = 0; i < result.length; i++) {
      result.push(
    <div class="box-init box">
      <img className="box_init_img"></img>

      <div className="box_init_div_id">
        아이디 / 티어
      </div>
      <div className="box_init_div_title">
        강의제목 테스트
      </div>
      <div className="box_init_div_time">
        100분 3000point
      </div>
      <div className="box_init_div_time">
        신청 가능
      </div>
    </div>
    );
    }
    return result;

  };
  */

  const search_btn = () => {
    /*
    let search = queryString.parse(window.location.search);
    console.log(search)
    if(search) {
      search = search.search;

      const search_array = [];

      for(let i=0; i<data.length; i++){
        if((data[i]['title']+"").includes(search) || (data[i]['gosok_id']+"").includes(search)){
          search_array.push(data[i]);
        }
      }

      console.log(search);
      console.log(search_array);

      setData(search_array);
    }
    */
    /*
    const search_array = [];

    for(let i=0; i<result_total.length; i++){
      if((result_total[i]['title']+"").includes(search) || (result_total[i]['gosok_id']+"").includes(search) || (result_total[i]['summonerName']+"").includes(search)){
        search_array.push(result_total[i]);
      }
    }
    */

    const search_array = [];
    if(selected_line!=""){
      for(let i=0; i<result_total.length; i++){
        if((result_total[i]['position']+"").includes(selected_line)){
          search_array.push(result_total[i]);
        }
      }
    }else{
      for(let i=0; i<result_total.length; i++){
        search_array.push(result_total[i]);
      }
      //search_array = result_total;
    }

    const search_array1 = [];
    if(selected_tier!=""){
      for(let i=0; i<search_array.length; i++){
        if((search_array[i]['tier']+"").includes(selected_tier)){
          search_array1.push(search_array[i]);
        }
      }
    }else{
      for(let i=0; i<search_array.length; i++){
          search_array1.push(search_array[i]);
      }
      //search_array1 = search_array;
    }

    const search_array2 = [];
    if(search!=""){
      for(let i=0; i<search_array1.length; i++){
        if((search_array1[i]['title']+"").includes(search) || (search_array1[i]['gosok_id']+"").includes(search) || (search_array1[i]['summonerName']+"").includes(search)){
          search_array2.push(search_array1[i]);
        }
      }
    }else{
      for(let i=0; i<search_array1.length; i++){
          search_array2.push(search_array1[i]);
      }
      //search_array2 = search_array1;
    }

    setResult(search_array2);

    //setResult(search_array);
  }

  const regist_btn = () => {

    if(!sessionStorage.getItem('login-token')){
      alert("로그인 후 이용가능합니다.");
      return;
    }
    //if(sessionStorage.setItem('mento', id)){

  //}
    window.location.href = "/lecture_regist"
    //navigate("/lecture_regist");
  }

  const sort_btn = () => {
    //const sort_array = [];

    /*
    for(var i=9; i<result.length; i++){
        sort_array.push(result[i]);
    }

    sort_array.sort()
    */
    var sort_array = [];

    if(sort_state != 1){
      setSort_state(1);
      sort_array = result.sort(function (a, b) {
      	return b.average - a.average;
      });

      //setResult(sort_array);
    }else{
      setSort_state(2);
      sort_array = result.sort(function (a, b) {
        return a.average - b.average;
      });

      //setResult(sort_array);
    }

    console.log(sort_array);

    setResult(sort_array);

  }


  const handleSelect_line = (e) => {
    setSelected_line(e.target.value);

    const search_array = [];

    if(e.target.value==""){
      //setResult(result_total);

      const search_array1 = [];
      if(selected_tier!=""){
        for(let i=0; i<result_total.length; i++){
          if((result_total[i]['tier']+"").includes(selected_tier)){
            search_array1.push(result_total[i]);
          }
        }
      }else{
        for(let i=0; i<result_total.length; i++){
            search_array1.push(result_total[i]);
        }
        //search_array1 = search_array;
      }

      const search_array2 = [];
      if(search!=""){
        for(let i=0; i<search_array1.length; i++){
          if((search_array1[i]['title']+"").includes(search) || (search_array1[i]['gosok_id']+"").includes(search) || (search_array1[i]['summonerName']+"").includes(search)){
            search_array2.push(search_array1[i]);
          }
        }
      }else{
        for(let i=0; i<search_array1.length; i++){
            search_array2.push(search_array1[i]);

        }
        //search_array2 = search_array1;
      }

      setResult(search_array2);
    }else{
      for(let i=0; i<result_total.length; i++){
        if((result_total[i]['position']+"").includes(e.target.value)){
          search_array.push(result_total[i]);
        }
      }

      const search_array1 = [];
      if(selected_tier!=""){
        for(let i=0; i<search_array.length; i++){
          if((search_array[i]['tier']+"").includes(selected_tier)){
            search_array1.push(search_array[i]);
          }
        }
      }else{
        for(let i=0; i<search_array.length; i++){
            search_array1.push(search_array[i]);
        }
        //search_array1 = search_array;
      }

      const search_array2 = [];
      if(search!=""){
        for(let i=0; i<search_array1.length; i++){
          if((search_array1[i]['title']+"").includes(search) || (search_array1[i]['gosok_id']+"").includes(search) || (search_array1[i]['summonerName']+"").includes(search)){
            search_array2.push(search_array1[i]);
          }
        }
      }else{
        for(let i=0; i<search_array1.length; i++){
            search_array2.push(search_array1[i]);

        }
        //search_array2 = search_array1;
      }

      setResult(search_array2);
    }
  };

  const handleSelect_tier = (e) => {
    setSelected_tier(e.target.value);

    const search_array = [];

    if(e.target.value==""){
      //setResult(result_total);

      const search_array1 = [];
      if(selected_line!=""){
        for(let i=0; i<result_total.length; i++){
          if((result_total[i]['position']+"").includes(selected_line)){
            search_array1.push(result_total[i]);
          }
        }
      }else{
        for(let i=0; i<result_total.length; i++){
            search_array1.push(result_total[i]);

        }
        //search_array1 = search_array;
      }

      const search_array2 = [];
      if(search!=""){
        for(let i=0; i<search_array1.length; i++){
          if((search_array1[i]['title']+"").includes(search) || (search_array1[i]['gosok_id']+"").includes(search) || (search_array1[i]['summonerName']+"").includes(search)){
            search_array2.push(search_array1[i]);
          }
        }
      }else{
        for(let i=0; i<search_array1.length; i++){
            search_array2.push(search_array1[i]);

        }
        //search_array2 = search_array1;
      }

      setResult(search_array2);
    }else{
      for(let i=0; i<result_total.length; i++){
        if((result_total[i]['tier']+"").includes(e.target.value)){
          search_array.push(result_total[i]);
        }
      }

      const search_array1 = [];
      if(selected_line!=""){
        for(let i=0; i<search_array.length; i++){
          if((search_array[i]['position']+"").includes(selected_line)){
            search_array1.push(search_array[i]);
          }
        }
      }else{
        for(let i=0; i<search_array.length; i++){
            search_array1.push(search_array[i]);

        }
        //search_array1 = search_array;
      }

      const search_array2 = [];
      if(search!=""){
        for(let i=0; i<search_array1.length; i++){
          if((search_array1[i]['title']+"").includes(search) || (search_array1[i]['gosok_id']+"").includes(search) || (search_array1[i]['summonerName']+"").includes(search)){
            search_array2.push(search_array1[i]);
          }
        }
      }else{
        for(let i=0; i<search_array1.length; i++){
            search_array2.push(search_array1[i]);

        }
        //search_array2 = search_array1;
      }

      setResult(search_array2);
    }
  };

    return (

      <div className="height_100_class">

      <Modal open={modalOpen} close={closeModal} closeModal={closeModal} submit_click={submit_click}
      selectId={select_id} select_title={select_title} select_lecture_time={select_lecture_time}
      select_price={select_price} select_lecture_description={select_lecture_description} select_mento_description={select_mento_description} select_start_time={select_start_time}>
      </Modal>


        <Header/>

        <div className="lecture_background">

        <select className="w150" onChange={handleSelect_line}>
          <option value="">라인 전체</option>
          <option value="탑" >탑</option>
          <option value="정글">정글</option>
          <option value="미드">미드</option>
          <option value="원딜">원딜</option>
          <option value="서포트">서포트</option>
        </select>

        <select className="w151" onChange={handleSelect_tier}>
          <option value="">티어 전체</option>
          <option value="IRON" >아이언</option>
          <option value="BRONZE">브론즈</option>
          <option value="SILVER">실버</option>
          <option value="GOLD">골드</option>
          <option value="PLATINUM">플래티넘</option>
          <option value="DIAMOND">다이아몬드</option>
          <option value="MASTER">마스터</option>
          <option value="GRAND">그랜드마스터</option>
          <option value="CHALLENGER">챌린저</option>
        </select>


          <div className="lecture_search_div">
            <input className = "lecture_search_input" type="text" name="search" placeholder="제목 검색" onChange={(event) => setSearch(event.target.value)}/>
            <button className = "lecture_search_btn" type="button" onClick={() => search_btn()}>검색</button>
          </div>

          <div className="lecture_sort_btn_div">
            <button className = "lecture_sort_btn" type="button" onClick={() => sort_btn()}>평점 정렬</button>
          </div>

          <div className="lecture_regist_btn_div">
            <button className = "lecture_regist_btn" type="button" onClick={() => regist_btn()}>강의등록</button>
          </div>


          <div class="lecture_grid-init grid">
          {
            result.map((list) =>
              <div class="box-init box" onClick={()=>select_modal(list.lecture_id, list.title, list.start_time, list.lecture_time, list.price, list.lecture_description, list.mento_description)}>
                <img className="box_init_img" src={list.img_url}></img>

                <div className="box_init_div_id">

                </div>
                <div className="box_init_div_title">
                  {list.title}
                </div>
                <div className="box_init_div_time">
                  {list.lecture_time} {list.price}point
                </div>

                <div className="box_init_div_title">
                  소환사 명 : {list.summonerName}
                </div>

                <div className="box_init_div_title">
                  티어 : {list.tier}
                </div>

                <div className="box_init_div_title">
                  라인 : {list.position}
                </div>

                <div className="box_init_div_title">
                  평점 : {list.average}
                </div>

                {
                    list.menti_in === null
                    ? <div className="box_init_div_time">
                      신청 가능
                    </div>
                    : <div className="box_init_div_time">
                      신청 불가
                    </div>
                  }

              </div>
            )
          }
          </div>

        </div>
      </div>

    );
  }

  export default Lecture;
