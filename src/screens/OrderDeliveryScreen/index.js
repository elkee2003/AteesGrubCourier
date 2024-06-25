import { View, Text } from 'react-native'
import React, {useRef, useMemo} from 'react'
import BottomSheet, { BottomSheetView,} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import orders from '../../../assets/data/orders.json'

const order = orders[0]

const OrderDeliveryScreen = () => {

    const bottomSheetRef = useRef(null)
    const snapPoints = useMemo(()=>['12%', '95%'], [])

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor:'lightblue' }}>
        <BottomSheet ref={bottomSheetRef}
      snapPoints={snapPoints} index={1} handleIndicatorStyle={styles.handleIndicator}>
        <BottomSheetView style={{flex:1}}>
            <View style={styles.header}>
                <Text style={{fontSize:25, letterSpacing:1,}}>14 min</Text>
                <FontAwesome name="shopping-bag" size={30} color="#eb5904" style={{marginHorizontal:10}}/>
                <Text style={{fontSize:25, letterSpacing:1,}}>5 km</Text>
            </View>
            <View style={styles.orderDetails}>
                <Text style={styles.restuarantName}>
                        {order.Restaurant.name}
                </Text>
                <View style={styles.storeRow}>
                    <Fontisto name="shopping-store" size={24} color="black" />
                    <Text style={styles.restuarantAddy}>
                    {order.Restaurant.address}
                    </Text>
                </View>
                
                <View style={styles.userRow}>
                    <FontAwesome6 name="map-location-dot" size={24} color="black" />
                    <Text style={styles.userAddy}>
                        {order.User.address}
                    </Text>
                </View>

                <View style={styles.itemDetails}>
                    <Text style={styles.unitItem}>Onion Rings x1</Text>
                    <Text style={styles.unitItem}>Shawama x5</Text>
                    <Text style={styles.unitItem}>Burger x6</Text>
                    <Text style={styles.unitItem}>Bole x2</Text>
                </View>
            </View>
            <View style={styles.btn}>
                <Text style={styles.btnTxt}>Accept Order</Text>
            </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  )
}

export default OrderDeliveryScreen