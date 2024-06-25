import { View, Text, Image } from 'react-native'
import React from 'react'
import orders from '../../../assets/data/orders.json'
import { Entypo } from "@expo/vector-icons";
import styles from './styles'

const order = orders[0]

const OrderItem = ({order}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={{uri: order.Restaurant.image}} style={styles.img}/>
      
        <View style={styles.txt}>
          <Text style={styles.restaurantName}>
            {order.Restaurant.name}
          </Text>
          <Text style={{color:'grey'}}>{order.Restaurant.address}</Text>

          <Text style={{marginTop:10}}>Delivery Details</Text>
          <Text style={{color:'grey'}}>{order.User.name}</Text>
          <Text style={{color:'grey'}}>{order.User.address}</Text>
        </View>
        
        <View style={styles.iconContainer}>
          <Entypo name="check" size={30} color='black' style={{marginLeft:'auto'}}/>
        </View>
        
      </View>
    </View>
  )
}

export default OrderItem
