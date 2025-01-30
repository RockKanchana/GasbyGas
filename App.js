import {Routes, Route} from "react-router-dom";
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Routes>
  );
}

export default App;
