import { Button, Text, View } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

function Setting1({navigation}){
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Button
            title="Go to Setting2"
            onPress={()=> navigation.navigate('S2')} 
            
            />
        </View>
    )
}
function Setting2({navigation}){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Button title="Go back" onPress={() => navigation.goBack()}
            />
        </View>
    )
}
const Stack= createNativeStackNavigator();
function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="S1" component={Setting1}/>
            <Stack.Screen name="S2" component={Setting2}/>
        </Stack.Navigator>
    )
}
export default function SettingsScreen(){
    return(
       <MyStack/>
    )
}