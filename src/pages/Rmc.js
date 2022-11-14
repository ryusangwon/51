import React, { useEffect, useState } from 'react';
import Header from './Header';
import './css/rmc.css';


const Rmc = () => {

  const [search, setSearch] = useState('');

  const search_btn = () => {
    alert(search);
  }

  const record_btn = () => {

  }

  const new_rmc_btn = () => {

  }
  
    return (
      <div classname="height_100_class">
        <Header/>


        <div className="rmc_background">
          <div className="rmc_search_div">
            <input className = "rmc_search_input" type="text" name="search" placeholder="검색" onChange={(event) => setSearch(event.target.value)}/>
            <button className = "rmc_search_btn" type="button" onClick={() => search_btn()}>검색</button>
          </div>

          <div className="rmc_record_btn_div">
            <button className = "rmc_record_btn" type="button" onClick={() => record_btn()}>녹화</button>
          </div>


          <table className="rmc_table">
            <thead className="rmc_thead">
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일자</th>
            </thead>

            <tbody>
              <tr>

              </tr>
            </tbody>

          </table>

          <div className="rmc_table_bottom_div">
            <button className = "rmc_record_btn" type="button" onClick={() => new_rmc_btn()}>새글쓰기</button>
          </div>


        </div>



      </div>
      
    );
  }

  export default Rmc;