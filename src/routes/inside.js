import { createStackNavigator } from "@react-navigation/stack"
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";
import { useContext } from "react";
import Home from "../screens/Home"
import Character from "../screens/Character"
import { AuthContext } from '../contexts/auth'


export function InsideLayout() {
    const { setUser } = useContext(AuthContext)
    const InsideStack = createStackNavigator()

    return (
        <InsideStack.Navigator >
            <InsideStack.Screen name="home" component={Home} options={{
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#2E8B57' },
                title: 'Rick and Morty',
                headerTitleAlign: 'center',
                headerRight: () => (
                    <TouchableOpacity style={{paddingRight: 25}} onPress={() => setUser(null)}>
                        <Icon style={{color: 'white'}} name="logout" size={24}/>
                    </TouchableOpacity>
                )
            }} />
            <InsideStack.Screen name="character" component={Character} />
        </InsideStack.Navigator>
    )
}