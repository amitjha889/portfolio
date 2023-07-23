
import makeStyles from "vue3-makestyles"

export const useStyles = makeStyles({

main:{
  width:'100%',
  height:'auto',
  display:'flex',
  background:'#130f40',
  display:'flex',
  flexDirection:'column'

},
firstdiv:{
display:'flex',
flexDirection:'row',
justifyContent:'center',

width:'100%',


},
firstdivleftdiv:{

  overflow:'hidden',
  
  
},
firstdivrightdiv:{
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',

  
  
  color:'#fff',
  fontFamily: 'Fasthand',
  textShadow:'#30336b 5px 5px 5px',
 
  
},

contactlink:{
  
  margin:'30px 0 0 0',
  background:'#130f40',
 
  boxShadow:'#fff 1px 1px 30px 1px',
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
  seconddiv:{
    display:'flex',
    
    background:'#130f40',
    width:'100%',
    
    
  },
  seconddivleftdiv:{

    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    
   
  },
  seconddivrightdiv:{

    display:'flex',
    flexDirection:'column',
    alignItems:'center',
   
   
  }
  ,
  backgroundclip:{
    
    position:'absolute',
    zIndex:1,
   
    boxShadow:"#fff 1px 1px 12px 1px "
   
  },
  button:{
   
    boxShadow:'#fff 1px 1px 5px 5px',
    transition:"linear 0.8s",background:'#30336b',color:'#fff',
    '&:hover':{
    transform:"scale(1.1)",
    background:'#fff',
    color:'#130f40',
    boxShadow:'#fff 0px 0px 0px 0px',
    fontWeight:'bold',
    border:'4px solid #30336b'
   
   }

  }


})