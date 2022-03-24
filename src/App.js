

import { Button } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./components/Error";
import Home from "./components/Home";
import Search from "./components/Search";
import Trailer from "./components/Trailer";


function App() {
  
  return (
    <div className="App">
      <div style={{display:"flex",justifyContent:"space-around"}}>
     <Link to={"/"}><Button>Home</Button></Link> 
     <Link to={"/movies"}><Button>movies</Button></Link> 
     </div>
     <Routes>
       
     <Route path="/" element={<Home />} />
     <Route path="/movies" element={<Search />} />
     <Route path="/trailer/:id" element={<Trailer />} />
     <Route path="*" element={<Error />} />
     </Routes>
    </div> 
  );
};

export default App;
