import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import SettingsScreen from '../screens/setting'
import {Ionicons} from '@expo/vector-icons'
const Tab = createBottomTabNavigator();
export default function MyTabs(){
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerStyle:{
                    backgroundColor:'#f4511e'
                },
                headerTintColor:'#fff',
                headerTitleStyles:{
                    fontWeight:'bold'
                },
                tabBarActiveTintColor:'tomato',
                tabBArInactiveTintColor:'gray',
                tabBarIcon: ({color}) =>{
                    let iconName
                    if(route.name == 'Home'){
                        iconName = 'home'
                    }
                    else if(route.name == 'Settings'){
                        iconName = 'settings-sharp'
                    }
                    return <Ionicons name={iconName} color={color} size={25}/>
                }
            })}
            >
            <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                title:'หน้าหลัก'
            }}
            />
            <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
                title:'ตั้งค่า'
            }}
            />


        </Tab.Navigator>
    )
}