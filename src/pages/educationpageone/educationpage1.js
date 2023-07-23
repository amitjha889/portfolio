import { useStyles } from "./educationpage1css"
import { Paper } from "@mui/material"
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from "../../componant/navbar";

export default function Educationfirstpage(){

var clasess=useStyles()

      
 const theme = useTheme();
 const xlarg=useMediaQuery(theme.breakpoints.up('lg'));
 const larg=useMediaQuery(theme.breakpoints.up('md'));
 const mid = useMediaQuery(theme.breakpoints.up('sm'));
 const small = useMediaQuery(theme.breakpoints.up('xs'));
 const smalldown = useMediaQuery(theme.breakpoints.down('sm'));



    return (

     <div className={clasess.main}  style={{flexDirection:xlarg?'row':larg?'row':mid?'column':small?'column':'',height:xlarg?'100vh':larg?'100vh':mid?'140vh':small?'132vh':''}}   >
        
        <div style={{marginBottom:'50px'}}>
        <Navbar  clr={'#fff'}  />
        </div>

        <div className={clasess.divleft} style={{paddingBottom:xlarg?'':larg?'':mid?'0px':small?'20px':''}} >
           
            <div  data-aos="zoom-in"  style={{marginTop:xlarg?'50px':larg?'100px':mid?'':small?'20px':''}}   >
              <img src="/assets/education.png"  style={{width:xlarg?'600px':larg?'450px':mid?'':small?'320px':'',height:xlarg?400:larg?430:mid?350:small?290:'',marginTop:xlarg?'':larg?'':mid?'20px':small?'0px':''}} />
            </div>
            
            <div>
              
                <div  data-aos="zoom-in" className={clasess.text}  style={{fontSize:xlarg?'80px':larg?'60px':mid?'30px':small?'25px':''}}>
                  Education 
                </div>
                
                <div data-aos="zoom-in" className={clasess.text1}  style={{fontSize:xlarg?'17px':larg?'13px':mid?'10px':small?'9px':''}}>
                  is the most powerful weapon which you can use to change the world.
                </div>
           
            </div>


        </div>

        <div className={clasess.divright}  style={{paddingBottom:xlarg?'':larg?'':mid?'30px':small?'50px':''}} >
            
            <div className={clasess.edulogo} style={{marginTop:xlarg?'160px':larg?'150px':mid?'20px':small?'20px':''}} >
             
             <div data-aos="zoom-in"  className={clasess.text2} style={{fontSize:xlarg?'80px':larg?'50px':mid?'50px':small?'40px':''}}>
                Education
             </div>
             <div data-aos="fade-left" data-aos-anchor="#example-anchor"  data-aos-offset="500" className={clasess.logo}>
                <img src="/assets/educationlogo.png" style={{width:xlarg?'100px':larg?'70px':mid?'80px':small?'80px':''}}/>
             </div>
            
            </div>

             
           

            <Paper  data-aos="flip-down" elevation={3}  className={clasess.paperdiv} style={{width:xlarg?585:larg?410:mid?500:small?300:'',marginTop:xlarg?'30px':larg?'30px':mid?'30px':small?'20px':'',height:xlarg?'20vh':larg?'20vh':mid?'20vh':small?'20vh':'',}} >

              <div className={clasess.imgdiv} style={{width:xlarg?'140px':larg?'140px':mid?'140px':small?'140px':''}}>
                 <img src='/assets/jiwaji.png' style={{width:xlarg?'100px':larg?'100px':mid?'100px':small?'100px':''}}  />
              </div>
              
             
                <Divider orientation="vertical" flexItem  />
            
              <div className={clasess.detaildiv} >
                
                <div className={clasess.detaildivtxt1} style={{fontSize:xlarg?25:larg?20:mid?22:small?13:''}}>
                  Jiwaji University Gwalior 
                </div>
                <div className={clasess.detaildivtxt2} style={{width:xlarg?350:larg?230:mid?280:small?160:''}}>
                  {smalldown?<><div style={{fontSize:xlarg?20:larg?15:mid?18:small?15:''}}>Bacholer of Commerce</div></>:<>
                  
                  <div style={{fontSize:xlarg?20:larg?15:mid?18:small?10:''}}>Bacholer of Commerce</div>
                  <div style={{fontSize:xlarg?15:larg?10:mid?13:small?6:''}}>2018-2021</div>
                  
                  </>}
                  
                </div>


              </div>


            </Paper>

            <Paper data-aos="flip-up"  elevation={3}  className={clasess.paperdiv1} style={{width:xlarg?585:larg?410:mid?500:small?300:'',marginTop:xlarg?'40px':larg?'40px':mid?'25px':small?'20px':''}} >

              <div className={clasess.imgdiv}  style={{width:xlarg?'140px':larg?'150px':mid?'140px':small?'140px':''}} >
                <img src='/assets/vkslogo.png' style={{width:xlarg?'120px':larg?'100px':mid?'120px':small?'110px':''}} />
              </div>
                
                
              <Divider orientation="vertical" flexItem  />
              
              <div className={clasess.detaildiv}>
                
              {smalldown?<>

                <div className={clasess.detaildivtxt3} style={{fontSize:xlarg?22:larg?20:mid?20:small?13:''}} >
                  VKS Higher Secondary School
                </div>

                <div className={clasess.detaildivtxt2}  style={{width:xlarg?350:larg?230:mid?280:''}} >
                  <div style={{fontSize:xlarg?20:larg?15:mid?18:small?15:''}}  >Schooling</div>    
                </div>
              
              
              </>:<>

                <div className={clasess.detaildivtxt3} style={{fontSize:xlarg?22:larg?20:mid?20:small?13:''}} >
                  VKS Higher Secondary School
                </div>
                <div className={clasess.detaildivtxt2}  style={{width:xlarg?350:larg?230:mid?280:''}} >
                  <div style={{fontSize:xlarg?20:larg?15:mid?18:small?15:''}}  >Schooling</div>    
                  <div  style={{fontSize:xlarg?15:larg?10:mid?13:small?10:''}}>2016-2018</div>
                </div>

              
              
              </>}
               

              </div>

            
            
            </Paper>


          </div>
     
    </div>

    )



}