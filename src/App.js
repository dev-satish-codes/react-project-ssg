
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <h2>shopper</h2>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><h2>home</h2><p>data</p></>}></Route>
        <Route path='kids' element={<><h2>kids</h2><p>kids data</p></>}></Route>
        <Route path='men' element={<><h2>mens</h2><p>mens data</p></>}></Route>
        <Route path='*' element={<><h2>home</h2><p>no data found</p></>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
