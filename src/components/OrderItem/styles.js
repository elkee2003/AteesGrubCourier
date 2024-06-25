import { StyleSheet,} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center,'
    },
    row:{
        flexDirection:'row', 
        borderWidth:1, 
        borderColor:'#eb5904', 
        borderRadius:10, 
        margin:10,
    },
    img:{
        width:'25%', 
        height:"100%", 
        borderRadius:12,
    },
    txt:{
        marginLeft:10, 
        flex:1, 
        paddingVertical:5
    },
    restaurantName:{
        fontSize:18,
    },
    iconContainer:{
        backgroundColor:'#eb5904', 
        borderBottomRightRadius:10,
        borderTopRightRadius:10, 
        alignItems:'center', 
        justifyContent:"center", 
        padding:5,
    },
})

export default styles;
