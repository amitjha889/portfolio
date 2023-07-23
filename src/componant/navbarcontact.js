import { useStyles } from "./navbarcontactcss"
import {  useNavigate } from "react-router-dom"

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Navbarcontact({clr,shd}){
    var navigate=useNavigate()
    var classes=useStyles()

    const theme = useTheme();
    const xlarg=useMediaQuery(theme.breakpoints.up('lg'));
    const larg=useMediaQuery(theme.breakpoints.up('md'));
    const mid = useMediaQuery(theme.breakpoints.up('sm'));
    const small = useMediaQuery(theme.breakpoints.up('xs'));
    



return(

    <div className={classes.main}>
     
      <div style={{width:small?'37.5%':'40%'}}  className={classes.namediv}>
        
       
        <div className={classes.name}   style={{fontSize:xlarg?48:larg?40:mid?36:small?24:28}} onClick={()=>navigate('/home')} >
         {' { amit Jha /> '} 
        </div>
      
      </div>

      <div className={classes.linklist} style={{marginLeft:larg?'15%':small?'3%':'12%', width:larg?'45%':small?'55%':'45%'}} >
     
        <div className={classes.links}   style={{fontSize:xlarg?20:larg?17:mid?15:small?10.5:11,color:xlarg?'#fff':larg?'#fff':mid?clr:small?clr:clr,textShadow:xlarg?' #30336b 5px 5px 5px':larg?' #30336b 5px 5px 5px':mid?shd:small?shd:shd}} onClick={()=>navigate('/home')} >Home</div> 
        <div className={classes.links} style={{fontSize:xlarg?20:larg?17:mid?15:small?10.5:11,color:xlarg?'#fff':larg?'#fff':mid?clr:small?clr:clr,textShadow:xlarg?' #30336b 5px 5px 5px':larg?' #30336b 5px 5px 5px':mid?shd:small?shd:shd}}   onClick={()=>navigate('/education')}>Education</div>
        <div className={classes.links}  style={{fontSize:xlarg?20:larg?17:mid?15:small?10.5:11,color:xlarg?'#fff':larg?'#fff':mid?clr:small?clr:clr,textShadow:xlarg?' #30336b 5px 5px 5px':larg?' #30336b 5px 5px 5px':mid?shd:small?shd:shd}}  onClick={()=>navigate('/project')}>Projects</div> 
        <div className={classes.links}  style={{fontSize:xlarg?20:larg?17:mid?15:small?10.5:11,color:xlarg?'#fff':larg?'#fff':mid?clr:small?clr:clr,textShadow:xlarg?' #30336b 5px 5px 5px':larg?' #30336b 5px 5px 5px':mid?shd:small?shd:shd}}  onClick={()=>navigate('/contact')}>Contact Me</div>  
      
      </div>
   
   
   
   
    </div>
)

}