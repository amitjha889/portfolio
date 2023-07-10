
import { useStyles } from "./footercss"



export default function Footer(){

    var classes=useStyles()

    return(

        <div  className={classes.main}>
    
           <div className={classes.endtitle} >Develope By Amit {'{Ak❤️}'}</div>
        
        </div>


    )



}