import makeStyles from "vue3-makestyles"

export const useStyles = makeStyles({

main:{
  width:'100%',
  height:'100vh',
  display:'flex',

},
divleft:{
    background:'#130f40',
    width:'100%',
    height:'100vh',
    display:'flex',
    alignItems:'center',
    flexDirection:'column'


},
img:{

    margin:'30px 0 0 0'
},
text:{
    fontSize:'80px',
    color:'#fff',
    fontWeight:'bold',
    fontFamily:'Ysabeau Infant',
    textShadow:'#fff 5px 4px 5px  '
},
text1:{
    fontSize:'20px',
    color:'#fff',
    fontWeight:'bold',
    fontFamily:'Ysabeau Infant',
    textShadow:'#fff 5px 4px 5px  ',
    letterSpacing:1
},
divright:{
    background:'#fff',
    width:'100%',
    height:'100vh',
    display:'flex',
    alignItems:'center',
    flexDirection:'column'

},
paperdiv:{
display:'flex',
flexDirection:'row',
background:'purple',
alignItems:'center',
height:'20vh',
width:'95%',
marginTop:'30px'
},
imgdiv:{

    display:'flex',
    background:'red',
    width:'25%',
    height:'18vh',
    marginLeft:'4px',
   
    justifyContent:'center'

},
detaildiv:{

    
    

},
paperdiv1:{
    flexDirection:'row',
    display:'flex',
    background:'red',
    alignItems:'center',
    height:'20vh',
    width:'95%',
    marginTop:'40px'
    
},
text2:{
    fontSize:'80px',
    color:'#130f40',
    fontWeight:'bold',
    fontFamily:'Ysabeau Infant',
    textShadow:'#130f40 5px 4px 5px  ',
   
},
edulogo:{

    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
 
    margin:'100px 0 0 0 '


},
logo:{
    marginLeft:'50px',
    
}
})