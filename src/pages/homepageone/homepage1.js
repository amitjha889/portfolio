import { useStyles } from './homepage1css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



export default function Page1(){
  
    var clasess=useStyles()

          
 const theme = useTheme();
 const xlarg=useMediaQuery(theme.breakpoints.up('lg'));
 const larg=useMediaQuery(theme.breakpoints.up('md'));
 const mid = useMediaQuery(theme.breakpoints.up('sm'));
 const small = useMediaQuery(theme.breakpoints.up('xs'));
 const middown=useMediaQuery(theme.breakpoints.down('md'));

   
     

    

return(

<div className={clasess.mainpageone} style={{height:xlarg?'100vh':larg?'80vh':mid?'80vh':small?'70vh':'',}} >

    {middown?<><div className={clasess.leftdiv}  style={{width:'100%',}}>
        
        <div  data-aos="zoom-in"   className={clasess.myname} style={{fontSize:xlarg?60:larg?50:mid?50:small?30:'',marginTop:xlarg?'160px':larg?'140px':mid?'140px':small?'120px':'',marginLeft:xlarg?80:larg?60:mid?'24%':small?'25%':'',width:xlarg?'300px':larg?'300px':mid?'50%':small?'40%':''}}   >
            Amit Jha
        </div>

        <div data-aos="fade-right"   className={clasess.title} style={{width:xlarg?'400px':larg?'350px':mid?'50%':small?'68%':'',fontSize:xlarg?'30px':larg?'22px':mid?'20px':small?'':'',marginTop:xlarg?'40px':larg?'30px':mid?'40px':small?'30px':'',marginLeft:xlarg?80:larg?60:mid?"24%":small?"18%":''}} >
            A passionate individual who always thrives to work on end to end products 
            which develop sustainable and scalable social and technical systems to 
            create impact.
        </div>

        <div  data-aos="fade-left" className={clasess.contactlink}  style={{width:xlarg?'400px':larg?'350px':mid?'65%':small?'80%':'',marginTop:'60px',marginLeft:xlarg?80:larg?60:mid?'15%':small?'11.5% ':''}}>

            <a  href='https://www.linkedin.com/in/amit-jha-404886272/' target='_blank'>
                <img src='/assets/linkedin.png' width='30px'  className={clasess.iconfocus}  />
            </a>
        
    
            <a href='https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage' target='_blank'>
                <img src='/assets/indeed.png' width='30px'className={clasess.iconfocus} style={{borderRadius:'5px'}} />
            </a>

        
            <a href='https://github.com/amitjha889/' target='_blank' >
                <img src='/assets/github.png' className={clasess.iconfocus}  width='30px' />
            </a>
        
            <a href='https://www.instagram.com/pyt_k15/' target='_blank'>
              <img src='/assets/instagram.png' className={clasess.iconfocus} width='30px' />
            </a>

        </div>
        

    </div>
    </>:<><div className={clasess.leftdiv} style={{width:'50%',}}   >
        
        <div  data-aos="zoom-in"   className={clasess.myname} style={{fontSize:xlarg?60:larg?50:mid?45:small?40:'',marginTop:xlarg?'160px':larg?'140px':'',marginLeft:xlarg?80:larg?60:'',width:'300px'}}   >
            Amit Jha
        </div>

        <div data-aos="fade-right"   className={clasess.title} style={{width:xlarg?'400px':larg?'350px':'',fontSize:xlarg?'30px':larg?'22px':mid?'':small?'':'',marginTop:xlarg?'40px':larg?'30px':mid?'10px':small?'10px':'',marginLeft:xlarg?80:larg?60:''}} >
            A passionate individual who always thrives to work on end to end products 
            which develop sustainable and scalable social and technical systems to 
            create impact.
        </div>

        <div data-aos="fade-left"  className={clasess.contactlink}  style={{width:xlarg?'400px':larg?'350px':'',marginTop:'60px',marginLeft:xlarg?80:larg?60:''}}>

            <a  href='https://www.linkedin.com/in/amit-jha-404886272/' target='_blank'>
                <img src='/assets/linkedin.png' width='30px'  className={clasess.iconfocus}  />
            </a>
        
    
            <a href='https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage' target='_blank'>
                <img src='/assets/indeed.png' width='30px'className={clasess.iconfocus} style={{borderRadius:'5px'}} />
            </a>

        
            <a href='https://github.com/amitjha889/git-learning' target='_blank'  >
                <img src='/assets/github.png' className={clasess.iconfocus}  width='30px' />
            </a>
        
            <a href='https://www.instagram.com/pyt_k15/' target='_blank'>
              <img src='/assets/instagram.png' className={clasess.iconfocus} width='30px' />
            </a>

        </div>
        

    </div>
    
    <div className={clasess.rightdiv}>

          <div data-aos="zoom-in"  className={clasess.imgdiv} style={{ marginTop:xlarg?'72px':larg?'0px':mid?'':small?'':''}}>
            <img src='/assets/firstboy.png'  style={{width:xlarg?'630px':larg?'420px':mid?'':small?'':''}} />
          </div>


    </div>
    </>}
    
    
 
   

</div>


)

}