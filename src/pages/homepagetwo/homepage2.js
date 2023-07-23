import { useStyles } from "./homepage2css"
import Showslider from "../../componant/slider"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



export default function Page2(){
    
   var clasess=useStyles()

    
          
 const theme = useTheme();
 const xlarg=useMediaQuery(theme.breakpoints.up('lg'));
 const larg=useMediaQuery(theme.breakpoints.up('md'));
 const mid = useMediaQuery(theme.breakpoints.up('sm'));
 const small = useMediaQuery(theme.breakpoints.up('xs'));
 const middown=useMediaQuery(theme.breakpoints.down('md'));

   

return(

<div className={clasess.mainpagetwo}  style={{height:xlarg?'100vh':larg?'100vh':mid?'80vh':small?'70vh':'',}}  >
 
    {middown?<>

      <div  className={clasess.rightdiv} style={{width:'100%'}}  >

         <div data-aos="zoom-in"  className={clasess.what} style={{fontSize:xlarg?'100px':larg?'70px':mid?'70px':small?'50px':'', marginTop:xlarg?'50px':larg?'80px':mid?'0px':small?'':'',marginLeft:xlarg?'':larg?'':mid?'':small?'':''}}>
            What I Do ?
         </div>

         <div   data-aos="zoom-in"   className={clasess.slider}>
            <Showslider/>
         </div>

         <div  data-aos="fade-right"  className={clasess.skil} style={{fontSize:xlarg?'20px':larg?'17px':mid?'20px':small?'':'',marginTop:xlarg?'100px':larg?'100px':mid?'100px':small?'50px':'',marginLeft:'10%' }}>
            <img src="/assets/coding.png" className={clasess.codinglogo}  /> <div>Building responsive frontend website using React-Redux</div>
         </div>

         <div data-aos="fade-left"  className={clasess.skil1}  style={{ fontSize:xlarg?'20px':larg?'17px':mid?'20px':small?'':''}} >
            <img src="/assets/coding.png" className={clasess.codinglogo}  /> <div>Creating application backend in Node & Express.</div>
         </div>

      </div>
    
    
    </>:<>


      <div  data-aos="zoom-in"  className={clasess.leftdiv} style={{justifyContent:'center',alignItems:'center'}}>
         
         

       <img src="/assets/secondboy.png"   style={{width:xlarg?'500px':larg?'420px':mid?'':small?'':'',height:xlarg?'400px':larg?'420px':mid?'':small?'':''}}  />

        
     
      </div>


      <div  className={clasess.rightdiv} style={{width:'50%'}} >

         <div data-aos="zoom-in"   className={clasess.what} style={{ fontSize:xlarg?'100px':larg?'70px':mid?'':small?'':'', marginTop:xlarg?'50px':larg?'100px':mid?'':small?'':''}}>
            What I Do ?
         </div>

         <div  data-aos="zoom-in"  className={clasess.slider}>
            <Showslider/>
         </div>

         <div data-aos="fade-right" className={clasess.skil} style={{ fontSize:xlarg?'20px':larg?'17px':mid?'':small?'':'',marginTop:xlarg?'100px':larg?'100px':mid?'100px':small?'50px':'',marginLeft:'10%'}}>
            <img src="/assets/coding.png" className={clasess.codinglogo}  /> <div>Building responsive frontend website using React-Redux</div>
         </div>

         <div  data-aos="fade-left" className={clasess.skil1}  style={{ fontSize:xlarg?'20px':larg?'17px':mid?'':small?'':''}} >
            <img src="/assets/coding.png" className={clasess.codinglogo}  /> <div>Creating application backend in Node & Express.</div>
         </div>

      </div>


    
    </>}  

    
</div>


)

}