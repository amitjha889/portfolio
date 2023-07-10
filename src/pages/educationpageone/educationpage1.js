import { useStyles } from "./educationpage1css"
import { Paper } from "@mui/material"
import Divider from '@mui/material/Divider';

export default function Educationfirstpage(){

var clasess=useStyles()


    return (

     <div className={clasess.main}>

        <div className={clasess.divleft}>
           
            <div className={clasess.img}>
              <img src="/assets/education.png"/>
            </div>
            
            <div>
              
                <div className={clasess.text}>
                  Education 
                </div>
                
                <div className={clasess.text1}>
                  is the most powerful weapon which you can use to change the world.
                </div>
           
            </div>


        </div>

        <div className={clasess.divright}>
            
            <div className={clasess.edulogo}>
             
             <div className={clasess.text2}>
                Education
             </div>
             <div className={clasess.logo}>
                <img src="/assets/educationlogo.png" style={{width:'100px '}}/>
             </div>
            
            </div>

             
           

            <div className={clasess.paperdiv} >

              <div className={clasess.imgdiv} >
                 <img src='/assets/jiwaji.png' style={{width:'80%'}} />
              </div>
              
             
                <Divider orientation="vertical" flexItem  style={{marginLeft:'5px'}}/>
            
              <div className={clasess.detaildiv}>
                <div style={{color:'#000',background:'#fff'}}>
                   Vankhandeswar Higher Secondary School
                </div>
                <div style={{color:'#fff',background:'#000'}}>
                  aaaaaaaaaaaaaaaaaaaaaaa
                </div>


              </div>


            </div>

            <div className={clasess.paperdiv1}>
            
            
            </div>


         </div>
     
    </div>

    )



}