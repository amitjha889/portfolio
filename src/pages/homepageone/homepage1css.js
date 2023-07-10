import makeStyles from "vue3-makestyles"

export const useStyles = makeStyles({
    
  mainpageone:{
  display:'flex',
  width:'100%',
  height:'100vh',
  background:'#0a3d62',
  
  

  },
  leftdiv:{
    width:'50%',
    height:'100vh',
    background:'#130f40',
    display:'flex',
    flexDirection:'column',
    
  },
  myname:{

    fontFamily:'Ubuntu',
    color:'#fff',
    fontSize:'400%',
    margin:'20vh 0 0 10%'
    

  },
  title:{
 
    display:'flex',
    width:'60%',
    fontFamily:'Ubuntu',
    color:'#fff',
    fontSize:'180%',
    margin:'4vh 0 0 10%',
    opacity:'0.8',
  
  
    
  },
  contactlink:{
  width:'40%',
  height:'50px',
  margin:'60px 0 0 10%',
  background:'#130f40',
  borderRadius:'28px',
  boxShadow:'#fff 1px 1px 15px 12px',
  display:'flex',
  justifyContent:'space-evenly',
  alignItems:'center',
  
  },
  iconfocus:{

    '&:hover':{
      width:'35px'
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
  margin:'72px 0 0 0',
  display:'flex',
  justifyContent:'center',
  alignItems:'end'



  },
  img:{

    width:'90%',
    height:'90%',
   

  }

 
  


  })