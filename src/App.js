import './App.css';
import List from "./components/List";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";


function App() {
  return (
    <>
    <div className="App">
      <Routes>
           <Route path="/" element={<Home/>}>
               <Route index element={<List/>}/>
               <Route path="about/:id" element={<Details/>}/>
           </Route>
           
       </Routes>

    </div>
  
  </>
  );
}

export default App;
