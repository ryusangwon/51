import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from './Header';
import './css/mypage_lol_info.css';
import { useNavigate } from "react-router-dom";

/*const [search, setSearch] = useState("");
const onChange = (e) => {
    setSearch(e.target.value)
}

const filterTitle = movies.filter((p) => {
    return p.title.toLocaleLowerCase(" ","").includes(search.toLocaleLowerCase().replace(" ",""))
})*/

const Mypage_lol_info = () => {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  //const [tier, setTier] = useState('');
  const [position, setPosition] = useState('');
  //const [champion, setChampion] = useState('');
  //const [nameflag, setNameflag] = useState(false);
  const [info, setInfo] = useState({summonerName:'', position:'', tier:'', win_rates:'', champions:''});
  const [point, setPoint] = useState('');

  const info_req_btn = () => {
    axios.post('http://localhost:3001/game/getData', {
            name : name,
            //tier : tier,
            position : position,
            //champion : champion,
      }).then((result)=>{
        setInfo(result.data);
        console.log(result.data.tier);
        if(result.data.length!=0){
          alert('lol정보를 가져왔습니다.');
          //navigate("/Mypage_lol_info");
        }
      })

  }

  const goto_page = () => {
    if(sessionStorage.getItem('mento')=='0'){
      window.location.href = "/mypage_course_list_mento"
    }else{
      window.location.href = "/mypage_course_list"
    }
  }

  const charge_point = () => {
    axios.post('http://localhost:3001/user/chargePoint', {
      point : point,
      gosok_id : sessionStorage.getItem('login-token'),

    }).then((result)=>{
      alert("충전이 완료되었습니다.");
    })
  }


    return (
        <div className="height_100_class">
        <Header/>

        <div className="mypage_back">
            <div className="mypage_side">
            <div className="mypage_side_account">
              {sessionStorage.getItem('login-token')}
              <br/>포인트 : {sessionStorage.getItem('point')}
              <br/>
              <input type="text" className="point_value" placeholder="포인트를 입력하세요" onChange={(event) => setPoint(event.target.value)} />
              <button onClick={()=>charge_point()}>포인트 등록</button>
            </div>
            <div className="mypage_side_divide">

            </div>
            <div className="mypage_side_menu" onClick={()=>goto_page()}>
              수강내역
            </div>
            <div className="mypage_side_menu" onClick={()=>navigate("/mypage_regist_mentor")}>
              멘토 등록
            </div>
            <div className="mypage_side_menu" onClick={()=>navigate("/mypage_lol_info")}>
              lol 정보
            </div>
          </div>
                <div className="mypage_content">
                    <div className="mypage_lol_info">
                        <div className="manage">
                            <div className="lol">
                                <div className="lol_info_name">lol 계정정보 가져오기</div>
                                    <input className="summoner_name" id="name" type="text" placeholder="소환사명" onChange={(event) => setName(event.target.value)}/>
                                    <div className="positions">
                                        <select className="position" placeholder="포지션" onChange={(event) => setPosition(event.target.value)}>
                                            <option>(포지션)</option>
                                            <option value="탑">탑</option>
                                            <option value="미드">미드</option>
                                            <option value="정글">정글</option>
                                            <option value="원딜">원딜</option>
                                            <option value="서포터">서포터</option>
                                        </select>
                                        <button className="summoner_name_button" onClick={() => info_req_btn()}>정보 가져오기</button>
                                    </div>
                                <div className="lol_info_name">lol 계정정보 확인</div>
                                <p>
                                    소환사명: {info.summonerName}<br/>
                                    포지션: {position}<br/>
                                    티어: {info.tier}<br/>
                                    승률: {info.win_rates}<br/>
                                    챔피언: {info.champions[0]} {info.champions[1]} {info.champions[2]} {info.champions[3]} {info.champions[4]}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </div>

    );
  }

  export default Mypage_lol_info;
