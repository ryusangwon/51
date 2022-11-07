import React, { useEffect } from 'react';
import Header from './Header';
import Mypage_course_list from './Mypage_course_list';
import Mypage_lol_info from './Mypage_lol_info';
import Mypage_regist_mentor from './Mypage_regist_mentor';

const Mypage = () => {
  
    return (
      <div>
        <Header/>

        <Mypage_course_list/>
      </div>
      
    );
  }

  export default Mypage;