import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Pickles from "./Pickles";
import Login from "./Login";
import Signup from "./Signup";
import Nonvegpickles from "./Nonvegpickles";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/pickles" element={<Pickles/>}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/nonvegpickles" element={<Nonvegpickles/>}/>

    </Routes>

  )

}

export default App;