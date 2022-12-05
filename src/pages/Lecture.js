import React, { useEffect, useState } from 'react';
import Header from './Header';
import './css/lecture.css';
import { useNavigate } from "react-router-dom";
import Modal from './Lecture_modal.js';
import axios from 'axios';


const Lecture = () => {
  let navigate = useNavigate();

  const [select_id, setSelect_id] = useState('');
  const [search, setSearch] = useState('');
  const [ result, setResult ] = React.useState([]);
  const [ result_total, setResult_total ] = React.useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const [server_flag, setServer_flag] = useState(false);

  const [selected, setSelected] = useState('');

  const [select_title, setSelect_title] = useState('');
  const [select_lecture_time, setSelect_lecture_time] = useState('');
  const [select_price, setSelect_price] = useState('');
  const [select_lecture_description, setSelect_lecture_description] = useState('');
  const [select_mento_description, setSelect_mento_description] = useState('');
  const [select_start_time, setSelect_start_time] = useState('');

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

    const new_result = [];

    axios.post('http://localhost:3001/lecture/existMenti', {
      id : select_id,

    }).then((result)=>{
      /*
      console.log(result);
      for(var i=0; i<result.length; i++){
        if(result[i].id == select_id){
          result[i].menti_in = 1;
        }

        new_result.push(result[i]);
      }

      setResult(new_result);
      */
      async_function();
    })

  };

  const select_modal = (id) => {
    //setSelect_id(id);
    for(var i=0; i< result.length; i++){
      if(id == result[i].id){
        setSelect_id(result[i].id);
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
        console.log(res.data);

        setResult(res.data);
        setResult_total(res.data);
        setServer_flag(true);

        console.log(res.data);;
    } catch(e) {
        console.error(e.message)
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

    const search_array = [];

    for(let i=0; i<result_total.length; i++){
      if((result_total[i]['title']+"").includes(search) || (result_total[i]['gosok_id']+"").includes(search)){
        search_array.push(result_total[i]);
      }
    }

    console.log(search);
    console.log(search_array);

    setResult(search_array);
  }

  const regist_btn = () => {

    //if(sessionStorage.setItem('mento', id)){

  //}
    window.location.href = "/lecture_regist"
    //navigate("/lecture_regist");
  }

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

    return (

      <div className="height_100_class">

      <Modal open={modalOpen} close={closeModal} closeModal={closeModal} submit_click={submit_click}
      selectId={select_id} select_title={select_title} select_lecture_time={select_lecture_time}
      select_price={select_price} select_lecture_description={select_lecture_description} select_mento_description={select_mento_description} select_start_time={select_start_time}>
      </Modal>


        <Header/>

        <div className="lecture_background">

          <div className="lecture_search_div">
            <input className = "lecture_search_input" type="text" name="search" placeholder="검색" onChange={(event) => setSearch(event.target.value)}/>
            <button className = "lecture_search_btn" type="button" onClick={() => search_btn()}>검색</button>
          </div>

          <div className="lecture_regist_btn_div">
            <button className = "lecture_regist_btn" type="button" onClick={() => regist_btn()}>강의등록</button>
          </div>


          <div class="lecture_grid-init grid">
          {
            result.map((list) =>
              <div class="box-init box" onClick={()=>select_modal(list.id, list.title, list.start_time, list.lecture_time, list.price, list.lecture_description, list.mento_description)}>
                <img className="box_init_img"></img>

                <div className="box_init_div_id">

                </div>
                <div className="box_init_div_title">
                  {list.title}
                </div>
                <div className="box_init_div_time">
                  {list.lecture_time} {list.price}point
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
