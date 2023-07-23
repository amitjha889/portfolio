import Contact from "../pages/contactpage/contactpage"
import Navbarcontact from "../componant/navbarcontact"
import Footercontact from "../componant/footercontact"

export default function Contactpage(){


return (
   
    
    <div style={{overflow:'hidden'}} >


        <div>
            <Navbarcontact />
        </div>
 
        <div>
        
          <Contact/>

        </div>

        <div>
        
            <Footercontact/>

        </div>
        


    </div>

)




}