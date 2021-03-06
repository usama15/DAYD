import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainBox:{
        backgroundColor:'white',
        borderRadius:20,
        padding:'7%',
        height:'100%',
        flex:1,
        // flexDirection:'row',
        marginTop:'5%',
    },
    text:{
        width:'auto',
        fontSize:18,
        padding:"2%",
        fontWeight:'700',
        fontFamily:'Ubuntu-Regular'
    },

    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        // justifyContent: 'flex-end',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
  
})

export default styles