import React, { useEffect, useState } from 'react';
import Header from './Header';
import './css/mypage_course_list.css';
import './css/mypage_side.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';

const Mypage_course_list = () => {
  let navigate = useNavigate();
  const [ lecture_list, setLecture_list ] = React.useState([]);
  const [server_flag, setServer_flag] = useState(false);
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
          console.log(res.data);
          setLecture_list(res.data);
          setServer_flag(true);
      } catch(e) {
          console.error(e.message)
      }
    };

    useEffect(() => {
      if(!server_flag){
          async_function();
      }



    });


  const enter_lecture = () => {


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
                      <td><input type="button" id="regist_end_button" onClick={() => deleteConfirm(list.id)} className="learning_table_button" value="강의종료" /></td>
                      <td><input type="button" id="regist_button" onClick={() => enter_lecture()} className="learning_table_button" value="강의실입장" /></td>
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
