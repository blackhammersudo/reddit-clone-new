
import './App.css';
import Loginpage from './components/LoginPAGE/Loginpage';
import Createpost from './components/createpost/Createpost';
import Body from './components/Body/Body';
import Fotterb from './components/Fotter1/Fotterb';
import Registation from './components/Registation/Registation';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      {/* <Body/> */}
      {/* <Loginpage /> */}
      {/* <Registation /> */}
      {/* <Createpost /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/Login' element={<Loginpage />} />
          <Route path='/Registation' element={<Registation />} />
          <Route path='/Createpost' element={<Createpost />} />
        </Routes>
      </BrowserRouter>
      <Fotterb />
    </>

  );
}

export default App;
