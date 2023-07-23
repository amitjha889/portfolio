import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import makeStyles from "vue3-makestyles";


export const useStyles=makeStyles({

   



main:{

width:'100%',
height:'12vh',
display:'flex',
flexDirection:'row',
position:'absolute'


},
namediv:{

overflow:'hidden',
display:'flex',
justifyContent:'center',
alignItems:'center',
marginLeft:'2%',






},
name:{


    color:'#fff',
    border:'#130f40',
    fontFamily: 'Fasthand',
    textShadow:' #30336b 5px 5px 5px',
    cursor:'pointer',
    
   
  
   
},
linklist:{

    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    
    fontFamily:'Ysabeau Infant',
    
    
  
    
   
},
links:{
    
    color:'#fff',
    fontWeight:'bold',
    textShadow:' #30336b 5px 5px 5px',
    border:'#130f40',
    cursor:'pointer',
    transition:"linear 0.8s",
    '&:hover':{
      transform:"scale(1.1)"
    }
    
}

})