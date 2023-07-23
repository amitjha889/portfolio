
import Navbar from "../componant/navbar"
import Footer from "../componant/footer"
import Educationfirstpage from "../pages/educationpageone/educationpage1"

export default function Educationpage(){

 
    

    return (

      <div style={{overflow:'hidden'}} > 

        {/* <div >
          <Navbar  clr={'#fff'}  />
        </div> */}
        <div>
          <Educationfirstpage/>
        </div>

        <div>
          <Footer/>
        </div>  


      </div>



    )



}