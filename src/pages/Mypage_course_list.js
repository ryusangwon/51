import React, { useEffect, useState } from 'react';
import Header from './Header';
import './css/mypage_course_list.css';
import './css/mypage_side.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/ko';

const Mypage_course_list = () => {
  let navigate = useNavigate();
  const [ lecture_list, setLecture_list ] = React.useState([]);
  const [server_flag, setServer_flag] = useState(false);
  var interval = null;

  /*
  useEffect(async() => {

        try{
            const res = await axios.get('http://localhost:3001/lecture/getLecture')
            // 받아온 데이터를 useState 를 이용하여 선언한다.
            console.log(res.data);
            setLecture_list(res.data);
        } catch(e) {
            console.error(e.message)
        }

    },[])
    */

    const async_function = async () => {
    // run asynchronous tasks here
      try{
          const res = await axios.get('http://localhost:3001/lecture/getLecture')
          // 받아온 데이터를 useState 를 이용하여 선언한다.
          //console.log(res.data);
          for(var i=0; i<res.data.length; i++){
            res.data[i].lecture_enable = false;
          }

          setLecture_list(res.data);
          setServer_flag(true);

          console.log(res.data);

      } catch(e) {
          console.error(e.message)
      }

    };

    useEffect(() => {
      if(!server_flag){
          async_function();
      }

      interval = setInterval(() => {
        const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
        //console.log(nowTime);

        const test_array = lecture_list;

        var change_flag = false;

        for(var i=0; i<test_array.length; i++){
          if(moment(test_array[i].start_time).format('YYYY-MM-DD HH:mm:ss')<nowTime){
              if(!test_array[i].lecture_enable){
                test_array[i].lecture_enable = true;
                //setLecture_list(test_array);
                change_flag = true;
                //console.log(test_array[i].id);
              }
          }
        }

        if(change_flag){
          setLecture_list(test_array);
        }


      }, 1000);

      //return () => clearInterval(interval);


      /*
      const interval = setInterval(() => {
        setRunningTime(getRunningTime(isoStartTime));
        console.log(runningTime);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
      */

    });



  const enter_lecture = (id) => {

    for(var i=0; i<lecture_list.length; i++){
      if(lecture_list[i].id == id && lecture_list[i].lecture_enable=="false"){
        alert("현재 강의시간이 아닙니다.");
        return;
      }
    }

    //var link = 'https://ehi-service.com/camera.php';
    //window.open(link, '_blank')

    //window.location.href = "/camera"

    window.open('/camera', '_blank')
  }

  const useConfirm = (message = null, onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
      return;
    }
    if (onCancel && typeof onCancel !== "function") {
      return;
    }

    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
      } else {
        onCancel();
      }
    };

    return confirmAction;
  };
  const deleteConfirm = (id) => {
    window.location.href = "/review?id="+id
  }
  //const cancelConfirm = () => console.log("종료를 취소했습니다.");
  //const confirmDelete = (id) => useConfirm(
  //  "종료하시겠습니까?",
  //  deleteConfirm(id),
  //  cancelConfirm
  //);

    return (

      <div className="height_100_class">
        <Header/>

        <div className="mypage_back">
        <div className="mypage_side">
            <div className="mypage_side_account">
              {sessionStorage.getItem('login-token')}
              <br/>포인트 : {sessionStorage.getItem('point')}
            </div>
            <div className="mypage_side_divide">

            </div>
            <div className="mypage_side_menu" onClick={()=>navigate("/mypage_course_list")}>
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
            <div className="course">
              <div className="learning">수강중인 강의</div>
                <div className="learning_box">
                  <table className="learning_table">
                    {lecture_list.map((list) =>
                    <tr>
                      <td className="learning_table_num_td">{list.id}</td>
                      <td className="learning_table_title_td">{list.title}</td>
                      <td classname="learning_table_date_td">{moment(list.start_time).format('YYYY-MM-DD HH:mm:ss')}</td>
                      <td><input type="button" id="regist_end_button" onClick={() => deleteConfirm(list.id)} className="learning_table_button" value="강의종료"/></td>
                      <td><input type="button" id="regist_button" onClick={() => enter_lecture(list.id)} className="learning_table_button" value="강의실입장" disabled={!list.lecture_enable}/></td>
                    </tr>
                    )}
                  </table>
                </div>

                <div className="learning">수강완료 강의</div>
                  <div className="learning_box">
                    <table className="learning_table">
                      {lecture_list.map((list) =>
                      <tr>
                        <td className="learning_table_num_td">{list.id}</td>
                        <td className="learning_table_title_td">{list.title}</td>
                        <td classname="learning_table_date_td">{moment(list.start_time).format('YYYY-MM-DD HH:mm:ss')}</td>
                        <td><input type="button" id="regist_end_button" onClick={() => deleteConfirm(list.id)} className="learning_table_button" value="강의종료"/></td>
                        <td><input type="button" id="regist_button" onClick={() => enter_lecture(list.id)} className="learning_table_button" value="강의실입장" disabled={!list.lecture_enable}/></td>
                      </tr>
                      )}
                    </table>
                  </div>


              </div>
            </div>
        </div>


      </div>

    );
  }

  export default Mypage_course_list;
