import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import LoginSplash from "./Screens/LoginSplash";
import SignUpPage from "./Screens/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="auto" />

			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerBackTitle: "Back",
					}}
				>
					<Stack.Screen name="Login/SignUp" component={LoginSplash} />
					<Stack.Screen name="Login" component={LoginScreen} />
					<Stack.Screen name="Sign Up" component={SignUpPage} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
