import React, { useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from "react-router-dom";

import RmcTable from '../components/table/RmcTable';
import RmcTableColumn from '../components/table/RmcTableCol';
import RmcTableRow from '../components/table/RmcTableRow';
import RmcHeader from '../components/RmcHeader';

function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('http://localhost:3001/user/').then((response)=> {
      setData(response.data);
    })
  }, []);

  const item = (Object.values(data)).map((rmc) => (
    <RmcTableRow key={rmc.id}>
    <RmcTableColumn>{rmc.id}</RmcTableColumn>
    <RmcTableColumn>
      <Link to={`/rmc/${rmc.id}`}>
        {rmc.title}
      </Link>
    </RmcTableColumn>
    <RmcTableColumn>{rmc.createAt}</RmcTableColumn>
    <RmcTableColumn>{rmc.username}</RmcTableColumn>
  </RmcTableRow>
  ));

  return item;
}

function Rmc() {
  const item = GetData();

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