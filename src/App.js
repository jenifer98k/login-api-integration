import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./component/Layout";
import './App.css';
import Login from "./component/Login";
import SignUp from "./component/SignUp";
function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<><Layout /></>}>
          <Route index element={<SignUp />} /> */}
           <Route path="/" Component={SignUp} />
          <Route path="/login" element={<Login/>} />
          
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
 
    </div>
  );
}

export default App;
