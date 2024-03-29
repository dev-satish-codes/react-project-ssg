import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { VideoMain } from './components/videos-main';
import { UserRegister } from './components/user-register';
import { UserLogin } from './components/user-login';
import { Cookies, useCookies } from 'react-cookie';
import { UserDashbord } from './components/user-dashbord';
import { AdminLogin } from './components/admin-login';
import { AdminDashboard } from './components/admin-dashbord';
import { AddVideo } from './components/add-video';
import { EditVideo } from './components/edit-video';
import { DeleteVideo } from './components/deletee-video';


function SignoutComponent(){
  const [Cookies,setcookie,removecookie]=useCookies('userName');
  let navigate = useNavigate();
  function Signout(){
    removecookie('userName');
    navigate('/UserLogin');
  }
  return(
    
      <button className='btn btn-light me-2' onClick={Signout}>Signout</button>
    
  )
}

function App() {
  return (
    <div className='container-fluid bg-dark text-light' style={{height:'100vh'}}>
      <BrowserRouter>
      <header className='d-flex justify-content-between p-2'>
        <div>
       <span className='h3'><Link to="/" style={{color:'white',textDecoration:'none'}}>Video library</Link></span>
        </div>
        <div>
          {
            (Cookies['UserName']===undefined)? <Link to='/UserLogin' className='btn btn-light me-2'>User Signin</Link> :<SignoutComponent/>
          }
          {
             (Cookies['UserID']===undefined)? <Link to='/AdminLogin' className='btn btn-light me-2'>Admin dashbord</Link> :<SignoutComponent/>
          }
        
        </div>

      </header>
      <section>
        <Routes>
          <Route path='/' element={<VideoMain/>}> </Route>
          <Route path='UserRegister' element={<UserRegister/>}></Route>
          <Route path='UserLogin' element={<UserLogin/>}></Route>
          <Route path='UserDashbord' element={<UserDashbord/>}></Route>
          <Route path='AdminLogin' element={<AdminLogin/>}></Route>
          <Route path='AdminDashboard' element={<AdminDashboard/>}></Route>
          <Route path='AddVideo' element={<AddVideo/>}></Route>
          <Route path='EditVideo/:id' element={<EditVideo/>}></Route>
          <Route path='DeleteVideo/:id' element={<DeleteVideo/>}></Route>
          
        </Routes>
      </section>
      </BrowserRouter>

    </div>
  );
}

export default App;
