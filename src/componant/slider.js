import React from "react";
import Slider from "react-slick"
import { createRef } from "react";
import { Paper } from "@mui/material"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Showslider(){
    var sliderref=createRef()

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
                      
                        <Paper style={{display:'flex',justifyContent:'center',width:'180px'}}>
                            <img src={`assets/${val.picture}`} style={{width:'120px',margin:'5px'}} />   
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
        autoplaySpeed:2000
          };

return (
 
        <div >
        
        <Slider {...settings} ref={sliderref} style={{width:'38vw',paddingLeft:'80px'}}  >
              {Showtecno()}
        </Slider>
          
         
           
        </div>
    

)



}