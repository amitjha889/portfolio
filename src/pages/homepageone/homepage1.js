import { useStyles } from './homepage1css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



export default function Page1(){
  
    var clasess=useStyles()

   
     

    

return(

<div className={clasess.mainpageone} >

    <div className={clasess.leftdiv}>
        
        <div className={clasess.myname} >
            Amit Jha
        </div>

        <div className={clasess.title} >
            A passionate individual who always thrives to work on end to end products 
            which develop sustainable and scalable social and technical systems to 
            create impact.
        </div>

        <div className={clasess.contactlink}>

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

          <div className={clasess.imgdiv} >
            <img src='/assets/firstboy.png' className={clasess.img}  />
          </div>


    </div>
 
   

</div>


)

}