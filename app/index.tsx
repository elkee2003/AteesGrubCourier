import { NavigationContainer } from '@react-navigation/native';
import orders from '../assets/data/orders.json'
import OrderDeliveryScreen from '../src/screens/OrderDeliveryScreen'
import Root from '../src/navigation/root'

const order = orders[0]

export default function Index() {
  return (
    <NavigationContainer>
      <Root/>
    </NavigationContainer>
  );
}
