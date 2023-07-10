import { Routes,Route,BrowserRouter as Router } from "react-router-dom";
import Homepage from "./screen/home";
import Educationpage from "./screen/education";



function App() {
  return (
    <div className="App">
      <Router>
        
        
        <Routes>

          <Route element={<Homepage/>} path='/home' />
          <Route element={<Educationpage/>} path='/education' />
              


        </Routes>


      </Router>
     
    </div>
  );
}

export default App;
