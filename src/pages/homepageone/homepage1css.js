import makeStyles from "vue3-makestyles"

export const useStyles = makeStyles({
    
  mainpageone:{
  display:'flex',
  width:'100%',
  
  background:'#0a3d62',
  
  

  },
  leftdiv:{
    
    height:'100vh',
    background:'#130f40',
    display:'flex',
    flexDirection:'column',
    
    
  },
  myname:{

    fontFamily:'Ubuntu',
    color:'#fff',
    display:'flex',
    justifyContent:'center'
    

  },
  title:{
 
    display:'flex',
    
    fontFamily:'Ubuntu',
    color:'#fff',
    
    
    opacity:'0.8',
  
  
    
  },
  contactlink:{
  
  height:'55px',
  
  background:'#130f40',
  borderRadius:'28px',
  boxShadow:'#fff 1px 1px 15px 12px',
  display:'flex',
  justifyContent:'space-evenly',
  alignItems:'center',
  
  },
  iconfocus:{


    transition:"linear 0.8s",
    '&:hover':{
      transform:"scale(1.3)"
    }

  },

  rightdiv:{

    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'50%',
    height:'100vh',
    background:'#fff'


  },
  imgdiv:{
   
  width:'90%',
  height:'90%',
 
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  



  },
  img:{

    
   

  }

 
  


  })