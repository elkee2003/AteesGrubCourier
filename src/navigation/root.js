
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderDeliveryScreen from '../screens/OrderDeliveryScreen'
import OrdersScreen from '../screens/OrdersScreen'

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Home" component={OrdersScreen} />
      </Stack.Navigator>
  )
}

export default Root