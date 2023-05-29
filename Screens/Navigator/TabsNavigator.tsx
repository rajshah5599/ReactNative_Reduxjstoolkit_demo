import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import TaskScreen from '../Tasks';
import ReminderScreen from '../Reminder';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="TaskScreen">
      <Tab.Screen name="TaskScreen" component={TaskScreen} />
      <Tab.Screen name="ReminderScreen" component={ReminderScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
