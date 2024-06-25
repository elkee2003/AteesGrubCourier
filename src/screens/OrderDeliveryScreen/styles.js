import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    handleIndicator:{
        backgroundColor:'grey', 
        width:80
    },
    header:{
        marginTop:10,
        marginBottom:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    orderDetails:{
        paddingHorizontal:20,
    },
    restuarantName:{
        fontSize:25,
        letterSpacing:1,
        paddingVertical:20
    },
    storeRow:{
        flexDirection:'row',
        marginBottom:20,
        alignItems:'center',
    },
    restuarantAddy:{
        fontSize:20,
        color:'grey',
        fontWeight:'500',
        letterSpacing:0.5,
        marginLeft:15,
    },
    userRow:{
        flexDirection:'row',
        marginBottom:20,
        alignItems:'center',
    },
    userAddy:{
        fontSize:20,
        color:'grey',
        fontWeight:'500',
        letterSpacing:0.5,
        marginLeft:15,
    },
    itemDetails:{
        borderTopWidth:1,
        borderColor:'lightgrey',
        paddingTop:20,
    },
    unitItem:{
        fontSize:18,
        color:'grey',
        fontWeight:'500', 
        letterSpacing:0.5,
        marginBottom:5,
    },
    btn:{
        backgroundColor:'#eb5904',
        marginTop:'auto',
        marginVertical:30,
        marginHorizontal:10,
        borderRadius:10,
    },
    btnTxt:{
        color:'#fff',
        paddingVertical:15,
        fontSize:25,
        fontWeight:'500',
        textAlign:'center',
        letterSpacing:0.5,
    }
})
export default styles