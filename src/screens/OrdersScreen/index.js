import { View, Text, FlatList } from 'react-native'
import React, {useRef, useMemo} from 'react'
import BottomSheet, { BottomSheetView,} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import styles from './styles'
import orders from '../../../assets/data/orders.json'
import OrderItem from '@/src/components/OrderItem';

const OrdersScreen = () => {
    const bottomSheetRef = useRef(null)
    const snapPoints = useMemo(()=>['12%', '95%'], [])
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor:'lightblue' }}>
      <BottomSheet ref={bottomSheetRef}
      snapPoints={snapPoints} index={1} handleIndicatorStyle={{backgroundColor:'grey', width:80}}>
        <BottomSheetView>
          <View style={styles.header}>
            <Text style={styles.onlineTxt}>You're online</Text>
            <Text style={styles.availableorders}>Available Orders: {orders.length}</Text>
          </View>
          <View>
            <FlatList
              data={orders}
              renderItem={({item})=> <OrderItem order={item}/>}
            />
        </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  )
}

export default OrdersScreen;