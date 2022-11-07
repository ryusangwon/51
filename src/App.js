import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
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