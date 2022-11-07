import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import Mypage_course_list from './pages/Mypage_course_list';
import Mypage_lol_info from './pages/Mypage_lol_info';
import Mypage_regist_mentor from './pages/Mypage_regist_mentor';
import Camera from './pages/Camera';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Lecture from './pages/Lecture';
import Rmc from './pages/Rmc';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/mypage_course_list" element={<Mypage_course_list />} />
      <Route path="/mypage_lol_info" element={<Mypage_lol_info />} />
      <Route path="/mypage_regist_mentor" element={<Mypage_regist_mentor />} />

      <Route path="/lecture" element={<Lecture />}/>
      <Route path="/rmc" element={<Rmc />}/>
      <Route path="/mypage" element={<Mypage />}/>

      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>

      <Route path="/camera" element={<Camera />}/>
    </Routes>
  );
};

export default App;