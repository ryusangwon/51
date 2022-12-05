import React, { useEffect, useState, useRef, useCallback } from 'react';
import Header from './Header';
import './css/rmc.css';
import axios from 'axios';
import { Link } from "react-router-dom";

import RmcTable from '../components/table/RmcTable';
import RmcTableColumn from '../components/table/RmcTableCol';
import RmcTableRow from '../components/table/RmcTableRow';
import RmcHeader from '../components/RmcHeader';
import RmcSearch from '../components/table/RmcSearch';
import queryString from 'query-string';

import recorder from 'react-canvas-recorder';

function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('http://localhost:3001/rmc/getrmc').then((response)=> {
      console.log(response);
      setData(response.data);
    })
  }, []);

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

    //setData(search_array);
  }




  const item = (Object.values(data)).map((rmc) => (
    <RmcTableRow key={rmc.id}>
    <RmcTableColumn>{rmc.id}</RmcTableColumn>
    <RmcTableColumn>
      <Link to={`/rmc/rmcview?id=${rmc.id}`}>
        {rmc.title}
      </Link>
    </RmcTableColumn>
    <RmcTableColumn>{rmc.create_date}</RmcTableColumn>
    <RmcTableColumn>{rmc.gosok_id}</RmcTableColumn>
  </RmcTableRow>
  ));

  return item;
}

function Rmc() {
  //const item = GetData();
  //const ref = useRef();

  const [result, setResult] = useState({});
  const [data, setData] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/rmc/getrmc').then((response)=> {
      console.log(response);
      setData(response.data);
      setResult(response.data);
    })
  }, []);


  const search_btn = (isbool) => {
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

    for(let i=0; i<result.length; i++){
      if((result[i]['title']+"").includes(search) || (result[i]['gosok_id']+"").includes(search)){
        search_array.push(result[i]);
      }
    }

    console.log(search);
    console.log(search_array);

    setData(search_array);
  }



  const item = (Object.values(data)).map((rmc) => (
    <RmcTableRow key={rmc.id}>
    <RmcTableColumn>{rmc.id}</RmcTableColumn>
    <RmcTableColumn>
      <Link to={`/rmc/rmcview?id=${rmc.id}`}>
        {rmc.title}
      </Link>
    </RmcTableColumn>
    <RmcTableColumn>{rmc.create_date}</RmcTableColumn>
    <RmcTableColumn>{rmc.gosok_id}</RmcTableColumn>
  </RmcTableRow>
  ));


  return (
    <div classname="height_100_class">
        <Header/>
  <>
    <RmcHeader></RmcHeader>

    <input type='text' maxLength='20' className='search_input' name='search' onChange={(event) => setSearch(event.target.value)} placeholder='검색어를 입력해주세요.'/>
    <input type='button' value='검색' className='serach_submit' onClick={()=>search_btn()}/>

    <RmcTable headersName={['글번호', '제목', '등록일', '작성자']}>
      {item}

    </RmcTable>

  </>
  </div>
  );
}

export default Rmc;
