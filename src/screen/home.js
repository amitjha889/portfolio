
import Page1 from "../pages/homepageone/homepage1"
import Page2 from "../pages/homepagetwo/homepage2"
import Navbar from "../componant/navbar"
import Footer from "../componant/footer"


export default function Homepage(){

    


return (

<div style={{overflow:'hidden'}}> 
    
   <div>
      <Navbar  clr={'#fff'} />
    </div>


    <div>
      <Page1/>
    </div>

    <div>
      <Page2/>
      
    </div>

    <div>
    <Footer/>
    </div>  

      
 


</div>


)

}