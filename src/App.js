import React from "react";
import { Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import Mypage_course_list from './pages/Mypage_course_list';
import Mypage_lol_info from './pages/Mypage_lol_info';
import Mypage_regist_mentor from './pages/Mypage_regist_mentor';
import Camera from './pages/Camera';
import Screen from './pages/Screen';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Lecture from './pages/Lecture';
import Lecture_regist from './pages/Lecture_regist';
import Rmc from './pages/Rmc';
import RmcView from './pages/RmcView';
import RmcQuestion from './pages/RmcQuestion';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/mypage_course_list" element={<Mypage_course_list />} />
      <Route path="/mypage_lol_info" element={<Mypage_lol_info />} />
      <Route path="/mypage_regist_mentor" element={<Mypage_regist_mentor />} />

      <Route path="/lecture" element={<Lecture />}/>
      <Route path="/lecture_regist" element={<Lecture_regist />}/>

      <Route path="/rmc" element={<Rmc />}/>
      <Route path='/rmc/:rmcId' element={<RmcView />}/>
      <Route path='/rmc/question' element={<RmcQuestion />}  />
      
      <Route path="/mypage" element={<Mypage />}/>

      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>

      <Route path="/camera" element={<Camera />}/>
      <Route path="/screen" element={<Screen />}/>
    </Routes>
  );
};

export default App;
