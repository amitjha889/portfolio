

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
marginLeft:'10%',
width:'30%',




},
name:{

    fontSize:'300%',
    color:'#fff',
    border:'#130f40',
    fontFamily: 'Fasthand',
    textShadow:' #30336b 5px 5px 5px',
    cursor:'pointer',
   
    '&:hover':{
        fontSize:'320%'
    }
   
},
linklist:{

    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'600px',
    fontFamily:'Ysabeau Infant',
    gap:'30px',
    margin:'0 0 0 380px',
    
   
},
links:{
    
    color:'#130f40',
    fontWeight:'bold',
    textShadow:' #30336b 5px 5px 5px',
    border:'#130f40',
    fontSize:'130%',
    cursor:'pointer',
    
    '&:hover':{
       fontSize:'120%',
       
    }
    
}

})