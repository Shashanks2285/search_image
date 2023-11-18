import React from "react";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Error from "./Error";
import Menu from "./Menu";
import Search from "./Search";
import { Route,Routes}  from "react-router-dom";
const App = ()=>{
  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<About name="SHASHANK SHEKHAR"/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </>
  );
}

export default App;