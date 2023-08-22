import { createStackNavigator } from "@react-navigation/stack"
import { useContext } from "react"
import { AuthContext } from "../contexts/auth"
import { InsideLayout } from "./inside"
import { LoginLayout } from "./login"


export default function Routes() {

    const Stack = createStackNavigator()
    const { user } = useContext(AuthContext)

    return (
        <Stack.Navigator >
            {user ? <Stack.Screen name="loggedRoutes" options={{ headerShown: false }} component={InsideLayout} />
                : <Stack.Screen name="loginRoutes" options={{ headerShown: false }} component={LoginLayout} />}
        </Stack.Navigator>
    )
}