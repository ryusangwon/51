import React, { useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

import './css/rmcview.css';
import moment from 'moment';


function RmcView() {
  //const{rmcId} = useParams();
  //const item = GetData(rmcId);

  const params = new URLSearchParams(window.location.search);
  //let id = params.get("id");
  const [ id, setId ] = useState(params.get("id"));

  const [title, setTitle] = useState('');
  const [videoId, setVideoId] = useState('');
  const [create_date, setCreate_date] = useState('');
  const [content, setContent] = useState('');
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);

  const [comment, setComment] = useState('');

  const [comment_result, setComment_result ] = React.useState([]);


  useEffect(() => {
    console.log(id);
    /*
    axios.get('http://localhost:3001/user/'+rmcId).then((response)=> {
        setwrite(response.data.write);
        setAnswer(response.data.answer);
    })
    */

    /*
    'http://localhost:3001/rmcBoard/create'
    롤문철아이디
    고속아이디
    코멘트
    */

    axios.post('http://localhost:3001/rmc/getRmcById', {
      id: id,
      }).then((result)=>{
        setTitle(result.data.title);
        setCreate_date(result.data.create_date);
        setContent(result.data.content);
        try{
            setVideoId(result.data.video_src.split("v=")[1]);
        }catch(e){

        }

        if(result.data.good != null)
          setGood(result.data.good);
        if(result.data.good != null)
          setBad(result.data.bad);



      })


      axios.post('http://localhost:3001/rmcBoard/getRmcBoard', {
        rmc_id: id,
        }).then((result)=>{
          console.log(result);
          if(result.data.length !=0)
            setComment_result(result.data);
        })

  }, []);

  const send_comment = () => {

    console.log(id);
    console.log(sessionStorage.getItem('login-token'));
    console.log(comment);

    axios.post('http://localhost:3001/rmcBoard/create', {
      rmc_id : id,
      gosok_id : sessionStorage.getItem('login-token'),
      comment : comment,

    }).then((result)=>{

      console.log(result);
      //window.location.href = "/rmc/rmcview?id="+id;
      window.location.replace("/rmc/rmcview?id="+id);
    })

    window.location.replace("/rmc/rmcview?id="+id);

  }

/*
  function Component() {
  if ( good != 0 || bad != 0) {
    return <p>true면 보입니다.</p>;
  } else {
    return null;
  }
}
*/

  return (
    <div classname="height_100_class">
      <Header/>
      <>
        <div>
        <h2 align="center">게시글 상세정보</h2>
        <div className="rmc-view-wrapper">
            <div className="rmc-view-row">
                <label>제목</label>
                <label>{title}</label>
            </div>
            <div className="rmc-view-row">
                <label>작성일</label>
                <label>{moment(create_date).format('YYYY-MM-DD HH:mm:ss')}</label>
            </div>
            <div className="rmc-view-row">
                <label>영상</label>
                <div>
                <YouTube
                    //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
                    videoId={videoId}
                    //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
                    //밑에서 더 설명하겠습니다.
                    //https://www.youtube.com/watch?v=M0O2YjP7ngw
                    opts={{
                    width: "560",
                    height: "315",
                    playerVars: {
                      autoplay: 1, //자동재생 O
                      rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                      modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                    },
                    }}
                    //이벤트 리스너
                    onEnd={(e)=>{e.target.stopVideo(0);}}
                    />
                </div>
            </div>

            <div className="rmc-view-center">
                <button className="agree_btn">
                  찬성
                </button>
                <div className="rmc-view-bar">
                  <div className="agree_percent_bar" style={{width: (good/(good+bad))*100+"%"}}>

                    {
                      good !== 0
                      ? parseFloat((good/(good+bad))*100).toFixed(2)+"%"
                      : null
                    }
                  </div>
                  <div className="disagree_percent_bar" style={{width: (bad/(good+bad))*100+"%"}}>

                    {
                      bad !== 0
                      ? parseFloat((bad/(good+bad))*100).toFixed(2)+"%"
                      : null
                    }
                  </div>
                </div>
                <button className="disagree_btn">
                  반대
                </button>
            </div>

            <div className="rmc-view-row">
                <label>내용</label>
                <div>
                 {content}
                </div>
            </div>


            <div className="rmc-view-row">
                <div className="rmc-view-commentbar">

                </div>
            </div>

            <div className="rmc-view-row">
                <label>댓글 {comment_result.length}</label>
                <div>
                    <input id="LOGIN_ID" className = "short_text" type="text" name="id" onChange={(event) => setComment(event.target.value)}/>
                    <button className="comment_btn" onClick={() => send_comment()}>입력</button>
                </div>
            </div>

            <table className="comment_list_table">
              {
                comment_result.map((list) =>
                <tr>
                  <td className="comment_list_td1">
                    {list.gosok_id}
                  </td>
                  <td className="comment_list_td2">
                    {list.comment}
                  </td>
                  <td className="comment_list_td2">
                    {moment(list.create_date).format('MM-DD HH:mm:ss')}
                  </td>
                </tr>
                )
              }
            </table>
        </div>
        </div>
      </>
    </div>
  );
}

export default RmcView;
