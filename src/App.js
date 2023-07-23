import { Routes,Route,BrowserRouter as Router } from "react-router-dom";
import Homepage from "./screen/home";
import Educationpage from "./screen/education";
import Projectpage from "./screen/project";
import Contactpage from "./screen/contact";



function App() {
  return (
    <div className="App">
      <Router>
        
        
        <Routes>
        
          <Route element={<Homepage/>} path='' />
          <Route element={<Homepage/>} path='/home' />
          <Route element={<Educationpage/>} path='/education' />
          <Route element={<Projectpage/>} path='/project' />
          <Route element={<Contactpage/>} path='/contact' />
         
              


        </Routes>


      </Router>
     
    </div>
  );
}

export default App;
