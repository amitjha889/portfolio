import zIndex from "@mui/material/styles/zIndex"
import { useStyles } from "./contactpagecss"
import { useState } from "react"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import amitresume from '../contactpage/amitresume.pdf'



export default function Contact(){

 var clasess=useStyles()

 const theme = useTheme();
 const xlarg=useMediaQuery(theme.breakpoints.up('lg'));
 const larg=useMediaQuery(theme.breakpoints.up('md'));
 const mid = useMediaQuery(theme.breakpoints.up('sm'));
 const small = useMediaQuery(theme.breakpoints.up('xs'));



 




return(

<div className={clasess.main}>


    <div className={clasess.firstdiv}  style={{height:xlarg?'100vh':larg?'80vh':mid?'85vh':small?'65vh':''}}>


        <div data-aos="flip-left" className={clasess.firstdivleftdiv}  style={{width:xlarg?'250px':larg?'200px':mid?'160px':small?'120px':'80px',height:xlarg?'250px':larg?'200px':mid?'160px':small?'120px':'80px',borderRadius:xlarg?'125px':larg?'100px':mid?'80px':small?'60px':'40px',marginTop:xlarg?'220px':larg?'230px':mid?'250px':small?'160px':''}}>
        
           <img src="/assets/akji.png"  style={{width:xlarg?'250px':larg?'200px':mid?'160px':small?'120px':''}}  />
        
        </div>

        <div data-aos="fade-left"  className={clasess.firstdivrightdiv} style={{fontSize:xlarg?'35px':larg?'30px':mid?'25px':small?'15px':'', width:'60%',height:xlarg?'250px':larg?'200px':mid?'160px':small?'185px':'80px',marginTop:xlarg?'250px':larg?'270px':mid?'300px':small?'180px':'',marginLeft:xlarg?'60px':larg?'60px':mid?'60px':small?'17px':''}}>
        
            <div  >
              I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Full Stack Web Development .
            </div>

            <div>
               
                <div className={clasess.contactlink}  style={{width:xlarg?'300px':larg?'270px':mid?'230px':small?'180px':'',height:'80px', borderRadius:'28px',}} >

                <a  href='https://www.linkedin.com/in/amit-jha-404886272/' target='_blank'>
                    <img src='/assets/linkedin.png' width='25px'  className={clasess.iconfocus}  />
                </a>


                <a href='https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage' target='_blank'>
                    <img src='/assets/indeed.png' width='25px'className={clasess.iconfocus} style={{borderRadius:'5px'}} />
                </a>


                <a href='https://github.com/amitjha889' target='_blank'  > 
                    <img src='/assets/github.png' className={clasess.iconfocus}  width='25px' />
                </a>

                <a href='https://www.instagram.com/pyt_k15/' target='_blank'>
                <img src='/assets/instagram.png' className={clasess.iconfocus} width='25px' />
                </a>

                </div>
           
            </div>
        
        
        </div>


    </div>


    <div className={clasess.seconddiv} style={{flexDirection:larg?'row':'column',height:'auto'}} >

        <div className={clasess.seconddivleftdiv} style={{ width:larg?'50%':'100%'}}>

            <div  data-aos="flip-down"  style={{fontFamily:'Fasthand',textShadow:' #30336b 5px 5px 5px',color:'#fff',fontSize:xlarg?'60px':mid?'40px':small?'30px':'25px',marginTop:xlarg?10:larg?100:0}}>
                Certificate
            </div>

            <div  data-aos="zoom-in"  >

              <img src="/assets/certificate.jpg"  style={{width:xlarg?'530px':larg?'410px':mid?'450px':small?'250px':'',marginTop:30,border:'3px solid  #000 ', boxShadow:'#fff 1px 1px 5px 5px'}} />

            </div>



        </div>

        <div  data-aos="fade-left"  className={clasess.seconddivrightdiv}  style={{ width:larg?'50%':'100%',height:'auto',paddingBottom:mid?'65px':small?'65px':'0px'}} >
               
               <div style={{color:'#fff',fontSize:xlarg?'30px':mid?'20px':small?'18px':'0px',width:larg?'99%':mid?'70%':small?'75%':'',height:'auto',fontFamily:'Fasthand',textShadow:' #30336b 5px 5px 5px',marginTop:xlarg?130:larg?188:mid?80:small?80:''}}>
                  Any fool can write code that a computer can understand . Good programmers write code that humans can understand . 
               </div>
              
           <a href={amitresume}   download={'AmitResume'} target="_blank"  style={{textDecoration:'none'}}  >
                <div style={{marginTop:larg?'0px':mid?'40px':small?30:'',display:'flex',justifyContent:'center',alignItems:'center',width:larg?'420px':'280px',height:xlarg?'358px':larg?'280px':'180px'}}>
            
                    <video   autoPlay loop muted playsInline className={clasess.backgroundclip} style={{ width:xlarg?400:larg?300:mid?250:small?200:'',borderRadius:xlarg?300:larg?200:mid?150:small?100:''}} >
                        
                        <source src="/assets/jally.mp4" type="video/mp4"></source>

                    </video> 
                    
                    
                    <div className={clasess.button} style={{border:'none',padding:8,width:xlarg?'80px':larg?'70px':mid?'60px':small?'30px':'',height:xlarg?'80px':larg?'70px':mid?'60px':small?'30px':'',borderRadius:xlarg?'50px':larg?'45px':mid?'40px':small?'22px':'',fontWeight:'bold',fontFamily:'Ysabeau Infant',fontSize:xlarg?'20px':larg?'16px':mid?'12px':small?'10px':'',zIndex:2,display:'flex',justifyContent:'center',alignItems:'center'}}    > 
                        Resume 
                    </div>
                
                
                </div>
            </a>
          
            
        
         </div>

     

    </div>



</div>





)




}