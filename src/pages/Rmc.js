import React, { useEffect, useState, useRef, useCallback } from 'react';
import Header from './Header';
import './css/rmc.css';
import axios from 'axios';
import { Link } from "react-router-dom";

import RmcTable from '../components/table/RmcTable';
import RmcTableColumn from '../components/table/RmcTableCol';
import RmcTableRow from '../components/table/RmcTableRow';
import RmcHeader from '../components/RmcHeader';

import recorder from 'react-canvas-recorder';

function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('http://localhost:3001/rmc/getrmc').then((response)=> {
      console.log(response);
      setData(response.data);
    })
  }, []);

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
  const item = GetData();
  const ref = useRef();


  return (
    <div classname="height_100_class">
        <Header/>
  <>
    <RmcHeader></RmcHeader>
    <RmcTable headersName={['글번호', '제목', '등록일', '작성자']}>
      {item}
    </RmcTable>

  </>
  </div>
  );
}

export default Rmc;
