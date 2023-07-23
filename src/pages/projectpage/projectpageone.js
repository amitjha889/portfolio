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
    const xssmall = useMediaQuery(theme.breakpoints.down('xs'));

    return (
  
 
        <div  className={clasess.main} style={{flexDirection:xlarg?'row':larg?'row':mid?'column':small?'column':'',height:xlarg?'100vh':larg?'100vh':mid?'150vh':small?'150vh':''}} >
            
            <div className={clasess.leftdiv} style={{ width:xlarg?'50%':larg?'50%':mid?'100%':small?'100%':'',paddingBottom:xlarg?'0px':larg?'0px':mid?'50px':small?'70px':''}} >

                    <div data-aos="zoom-in" className={clasess.imgdiv} style={{ marginTop:xlarg?192:larg?260:mid?150:small?140:''}}  >
                       <img src="/assets/project.png"  style={{width:xlarg?600:larg?500:mid?'80%':small?'100%':'',marginLeft:xlarg?'':larg?'':mid?'60px':small?'':''}} />
                    </div>
  


            </div>

            
            
            <div className={clasess.rightdiv} style={{ width:xlarg?'50%':larg?'50%':mid?'100%':small?'100%':''}} >

                <div data-aos="zoom-in" className={clasess.textpro} style={{ fontSize:xlarg?80:larg?70:mid?60:small?50:'',marginTop:xlarg?150:larg?120:mid?60:small?40:'',marginLeft:mid?'70px':small?120:''}}>
                        Projects
                </div>

                <div className={clasess.prodiv} style={{flexDirection:xlarg?'row':larg?'column':mid?'row':small?'column':'',marginTop:xlarg?75:larg?10:small?3:'',justifyContent:xlarg?'space-evenly':mid?'space-evenly':'',alignItems:larg?'center':small?'center':'', width:xlarg?'90%':larg?'70%':mid?'80%':small?'65%':'',height:xlarg?'':larg?'60%':mid?'':small?'80%':''}} >

                    <a data-aos="flip-left"  href="#" target="_blank" style={{textDecoration:'none'}} >
                        <Paper elevation={5}  className={clasess.paperdiv}   style={{width:xlarg?'250px':larg?'250px':mid?'220px':small?'200px':'',height:xlarg?'200px':larg?'180px':mid?'170px':small?'150px':''}} >
                
                        <div className={clasess.proname}  style={{fontSize:xlarg?'30px':larg?'26px':mid?'23px':small?'20px':'' }} >
                            Quickshopee
                        </div>

                        <div className={clasess.prodis} style={{fontSize:xlarg?'':larg?'14px':mid?'12px':small?'12px':''}}  >
                            A B2C E-Commerce Platform for buy/sell Grocery and other product it is basically make for fast delivery. 
                        </div>

                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center'}}>

                                <img src="/assets/react.png"  style={{width:xlarg?'60px':larg?'50px':mid?'45px':small?'30px':''}} />
                                <img src="/assets/node.png"  style={{width:xlarg?'60px':larg?'50px':mid?'45px':small?'30px':''}} />
                                <img src="/assets/sql.png"   style={{width:xlarg?'60px':larg?'50px':mid?'45x':small?'30px':''}}/>
                                <img src="/assets/mui.png"  style={{width:xlarg?'60px':larg?'50px':mid?'45px':small?'30px':''}} />

                            </div>
                    

                        </Paper>
                    </a>
                    
                    <a data-aos="flip-right"  href="https://github.com/amitjha889/portfolio" target="_blank" style={{textDecoration:'none',marginTop:xlarg?'':larg?'':mid?'':small?'30px':''}}>
                       
                        <Paper elevation={5}  className={clasess.paperdiv}    style={{width:xlarg?'250px':larg?'250px':mid?'220px':small?'200px':'',height:xlarg?'200px':larg?'180px':mid?'170px':small?'150px':''}} >
                            
                            
                            <div  className={clasess.proname} style={{fontSize:xlarg?'30px':larg?'26px':mid?'23px':small?'20px':'' }} >
                                Portfolio
                            </div>
                            <div className={clasess.prodis} style={{fontSize:xlarg?'':larg?'14px':mid?'12px':small?'12px':''}} >
                                A compilation of my academic and professional materials.
                            </div>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center',marginTop:'15px'}}>

                                <img src="/assets/react.png"  style={{width:xlarg?'60px':larg?'50px':mid?'45px':small?'30px':''}} />
                                <img src="/assets/css.png" style={{width:xlarg?'60px':larg?'50px':mid?'45px':small?'30px':''}} />
                                <img src="/assets/js.png"  style={{width:xlarg?'60px':larg?'50px':mid?'45px':small?'30px':''}} />
                                <img src="/assets/mui.png"  style={{width:xlarg?'60px':larg?'50px':mid?'45px':small?'30px':''}} />
                            </div>
                    
                    
                        </Paper>
                    </a> 


                </div>

            
            </div>

        </div>

    )


}