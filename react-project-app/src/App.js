import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { VideoMain } from './components/videos-main';
import { UserRegister } from './components/user-register';
import { UserLogin } from './components/user-login';
import { Cookies } from 'react-cookie';

function App() {
  return (
    <div className='container-fluid bg-dark text-light' style={{height:'100vh'}}>
      <BrowserRouter>
      <header className='d-flex justify-content-between p-2'>
        <div>
        video library
        </div>
        <div>
          
          (Cookies['UserName']===undefined)? <Link to='/UserLogin' className='btn btn-light me-2'>User Signin</Link> 
          
          admin dashbord
        </div>

      </header>
      <section>
        <Routes>
          <Route path='/' element={<VideoMain/>}> </Route>
          <Route path='UserRegister' element={<UserRegister/>}></Route>
          <Route path='UserLogin' element={<UserLogin/>}></Route>
        </Routes>
      </section>
      </BrowserRouter>

    </div>
  );
}

export default App;
