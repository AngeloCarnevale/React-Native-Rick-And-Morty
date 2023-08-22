import Login from "../screens/Login"
import SignUp from "../screens/SignUp"
import { createStackNavigator } from "@react-navigation/stack"


export function LoginLayout() {

    const LoginStack = createStackNavigator()

    return (
        <LoginStack.Navigator initialRouteName="login">
            <LoginStack.Screen name="login" component={Login} options={{ headerShown: false }} />
            <LoginStack.Screen name="signup" component={SignUp} 
                options={
                    { headerBackButtonMenuEnabled: true,
                    title: "Create Account", 
                    headerTitleAlign: "center", 
                    headerStyle: {backgroundColor: "#2E8B57"},
                    headerTitleStyle: {fontSize: 15},
                    headerBackTitleVisible: true,
                    headerBackTitle:"Back",
                    headerTintColor: 'white',
                    }} />
        </LoginStack.Navigator>
    )
}
