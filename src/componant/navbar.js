import { useStyles } from "./navbarcss"
import {  useNavigate } from "react-router-dom"




export default function Navbar(){
    var navigate=useNavigate()
    var classes=useStyles()

    



return(

    <div className={classes.main}>
     
      <div className={classes.namediv}>
        
        <div className={classes.name} >
         {' { amit Jha /> '} 
        </div>
      
      </div>

      <div className={classes.linklist} >
     
        <div className={classes.links} onClick={()=>navigate('/home')} >Home</div> 
     
        <div className={classes.links}  onClick={()=>navigate('/education')}>Education</div>
        <div className={classes.links} href={'#'}>Projects</div> 
        <div className={classes.links} href={'#'}>Contact Me</div>  
      
      </div>
   
   
   
   
    </div>
)

}