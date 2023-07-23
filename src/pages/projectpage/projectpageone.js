import { useStyles } from "./projectpageonecss"
import { Paper } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Projectpageone (){

      var clasess=useStyles()


      
    const theme = useTheme();
    const xlarg=useMediaQuery(theme.breakpoints.up('lg'));
    const larg=useMediaQuery(theme.breakpoints.up('md'));
    const mid = useMediaQuery(theme.breakpoints.up('sm'));
    const small = useMediaQuery(theme.breakpoints.up('xs'));

    return (
  
 
        <div  className={clasess.main} style={{flexDirection:xlarg?'row':larg?'row':mid?'column':small?'column':'',height:xlarg?'100vh':larg?'100vh':mid?'150vh':small?'150vh':''}} >
            
            <div className={clasess.leftdiv} style={{ width:xlarg?'50%':larg?'50%':mid?'100%':small?'100%':'',paddingBottom:xlarg?'0px':larg?'0px':mid?'50px':small?'70px':''}} >

                    <div data-aos="zoom-in" className={clasess.imgdiv} style={{ marginTop:xlarg?192:larg?260:mid?150:small?140:''}}  >
                       <img src="/assets/project.png"  style={{width:xlarg?600:larg?500:mid?'80%':small?'100%':'',marginLeft:xlarg?'':larg?'':mid?'60px':small?'':''}} />
                    </div>
  


            </div>

            
            
            <div className={clasess.rightdiv} style={{ width:xlarg?'50%':larg?'50%':mid?'100%':small?'100%':''}} >

                <div data-aos="zoom-in" className={clasess.textpro} style={{ fontSize:xlarg?80:larg?70:mid?60:small?50:'',marginTop:xlarg?150:larg?120:mid?60:small?20:'',marginLeft:mid?'70px':small?120:''}}>
                        Projects
                </div>

                <div className={clasess.prodiv} style={{flexDirection:xlarg?'row':larg?'column':mid?'row':small?'column':'',marginTop:xlarg?75:larg?10:small?3:'',justifyContent:xlarg?'space-evenly':mid?'space-evenly':'',alignItems:larg?'center':small?'center':''}} >

                    <a data-aos="flip-left"  href="#" target="_blank" style={{textDecoration:'none'}} >
                        <Paper elevation={5}  className={clasess.paperdiv}   style={{width:'250px',height:'200px'}} >
                
                        <div className={clasess.proname}>
                            Quickshopee
                        </div>

                        <div className={clasess.prodis}>
                            A B2C E-Commerce Platform for buy/sell Grocery and other product it is basically make for fast delivery. 
                        </div>

                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center'}}>

                                <img src="/assets/react.png"  style={{width:'60px'}} />
                                <img src="/assets/node.png"  style={{width:'60px'}} />
                                <img src="/assets/sql.png"  style={{width:'60px'}} />
                                <img src="/assets/mui.png"  style={{width:'60px'}} />

                            </div>
                    

                        </Paper>
                    </a>
                    
                    <a data-aos="flip-right"  href="https://github.com/amitjha889/portfolio" target="_blank" style={{textDecoration:'none'}}>
                        <Paper elevation={5}  className={clasess.paperdiv}  style={{width:'250px',height:'200px',marginTop:xlarg?'':larg?'8px':small?'35px':''}}>
                            
                            
                            <div  className={clasess.proname} >
                                Portfolio
                            </div>
                            <div className={clasess.prodis}>
                                A compilation of my academic and professional materials.
                            </div>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center',marginTop:'15px'}}>

                                <img src="/assets/react.png"  style={{width:'60px'}} />
                                <img src="/assets/css.png"  style={{width:'50px'}} />
                                <img src="/assets/js.png"  style={{width:'60px'}} />
                                <img src="/assets/mui.png"  style={{width:'60px'}} />
                            </div>
                    
                    
                        </Paper>
                    </a> 


                </div>

            
            </div>

        </div>

    )


}