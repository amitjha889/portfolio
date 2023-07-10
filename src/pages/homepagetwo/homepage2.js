import { useStyles } from "./homepage2css"
import Showslider from "../../componant/slider"


export default function Page2(){
    var clasess=useStyles()

return(

<div className={clasess.mainpagetwo} >
 
      <div  className={clasess.leftdiv}>
         
         <div className={clasess.imgdiv}>

            <img src="/assets/secondboy.png"  className={clasess.img}/>

         </div>
     
      </div>

      <div  className={clasess.rightdiv}>

         <div className={clasess.what}>
            What I Do ?
         </div>

         <div className={clasess.slider}>
            <Showslider/>
         </div>
        
         <div className={clasess.skil}>
              <img src="/assets/coding.png" className={clasess.codinglogo}  /> <div>Building responsive website front end using React-Redux</div>
         </div>

         <div className={clasess.skil1}>
              <img src="/assets/coding.png" className={clasess.codinglogo}  /> <div>Creating application backend in Node & Express.</div>
         </div>
      
      </div>




</div>


)

}