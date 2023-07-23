import React from "react";
import Slider from "react-slick"
import { createRef } from "react";
import { Paper } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Showslider(){
    var sliderref=createRef()



    const theme = useTheme();
    const xlarg=useMediaQuery(theme.breakpoints.up('lg'));
    const larg=useMediaQuery(theme.breakpoints.up('md'));
    const mid = useMediaQuery(theme.breakpoints.up('sm'));
    const small = useMediaQuery(theme.breakpoints.up('xs'));
    const middown=useMediaQuery(theme.breakpoints.up('lg'));

    var ak=[{picture:'sql.png'},
    {picture:'react.png'},
    {picture:'node.png'},
    {picture:'js.png'},
    {picture:'html.png'},
    {picture:'css.png'},
    {picture:"git.png"},
    {picture:'boot.png'},
    {picture:'mui.png'}]
   
    const Showtecno=()=>{
           
        return ak.map((val)=>{

         
            return (
                
             
                    <div style={{width:'auto',height:'auto'}}>
                      
                        <Paper style={{display:'flex',justifyContent:'center',width:xlarg?'160px':larg?'160px':mid?'150px':small?'100px':''}}>
                            <img src={`assets/${val.picture}`} style={{width:xlarg?'100px':larg?'100px':mid?'90px':small?'60px':'',margin:'5px'}} />   
                        </Paper>
                        
                  
                    </div>
                                       
            
                 
            )

        })


    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:'false'
          };

return (
 
        <div >
        
        <Slider   {...settings} ref={sliderref} style={{marginTop:xlarg?'':larg?'':mid?'20px':small?'30px':'',  marginLeft:xlarg?'':larg?'5%':mid?'10%':small?'5%':'',width:xlarg?'38vw':larg?'38vw':mid?'60vw':small?'70vw':'',paddingLeft:xlarg?'80px':larg?'23px':mid?'7.5%':small?'5%':''}}  >
              {Showtecno()}
        </Slider>
          
         
           
        </div>
    

)



}