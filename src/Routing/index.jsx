import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Header from './../Component/Header/Header'
import Footer from './../Component/Footer/Footer'

const Routing = () => {
  return (
    <BrowserRouter>
  <Header/>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/home" element={<Home />} />
          
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Routing;