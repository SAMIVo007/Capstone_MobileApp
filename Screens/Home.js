import {
	Image,
	ScrollView,
	Text,
	TextInput,
	SafeAreaView,
	View,
	Button,
} from "react-native";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
// import Card from "../Components/card";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Carousel, Card } from "react-native-ui-lib";
import Colors from "../Components/Colors";
import { logoutUser, fetchUserDetails, isSessionValid } from "../util/Api";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function HomePage({ route, navigation }) {
	const [myuser, setmyuser] = useState("");
	const sessionToken = route.params.userId;
	// console.log("home:", sessionToken);
	const handleLogout = async () => {
		try {
			const loggedOut = await logoutUser(sessionToken);

			if (loggedOut) {
				navigation.navigate("Login");
			} else {
				console.log("Not logeed in");
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const getMyUser = async () => {
			try {
				const getusertemp = await fetchUserDetails(sessionToken);
				console.log("in use effect");
				setmyuser(getusertemp.data);
			} catch (e) {
				console.log(e);
			}
		};
		const checkLoginSession = isSessionValid();
		if (checkLoginSession) {
			getMyUser();
		} else {
			navigation.navigate("Login");
		}
	}, []);

	const items = [1, 2, 3, 4];

	const renderItem = (item, index) => {
		return (
			<View
				key={index}
				style={{
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Card>
					<Card.Section
						content={[{ text: `Card ${item}`, text70: true, white: true }]}
						contentStyle={{
							alignItems: "center",
							backgroundColor: "green",
							padding: 12,
							width: 370,
							height: 200,
							justifyContent: "center",
						}}
					/>
				</Card>
			</View>
		);
	};

	return (
		<>
			<StatusBar style="auto" />

			<View className="flex-1 ">
				<View
					className=" p-4 pt-16 bg-primaryBlue "
					// style={{ borderBottomEndRadius: 16, borderBottomStartRadius: 16 }}
				>
					<View className="flex-row justify-between">
						<View className="flex-row justify-between">
							<Image
								source={require("../assets/Images/Emblem_of_India.png")}
								className="w-[12%] h-[100%]"
							/>
							<Text className="text-white ml-[-12] text-lg text-center font-bold">
								Trust Trace
							</Text>
						</View>

						<Button
							title="logout"
							color={"white"}
							onPress={() => {
								handleLogout();
							}}
						/>

						<View className="flex-row justify-between">
							<MaterialIcons
								name="qr-code-scanner"
								size={24}
								color="white"
								style={{ padding: 2, paddingHorizontal: 8 }}
							/>
							<Ionicons
								name="language"
								size={24}
								color="white"
								style={{ padding: 2, paddingHorizontal: 8 }}
							/>
							<AntDesign
								name="search1"
								size={24}
								color="white"
								style={{ padding: 2, paddingHorizontal: 8, paddingRight: 0 }}
							/>
						</View>
					</View>
				</View>
				<View className="mt-3 p-1 ml-3 ">
					<Text className="text-primaryBlue text-xl font-bold  pb-1">
						Welcome,{myuser.name}
					</Text>
				</View>

				<View className="flex-1 mt-4">
					<ScrollView horizontal={true} className="px-3">
						<Card width={300} height={150} className="mr-3">
							<Card.Section
								content={[{ text: "chalaan 1", text70: true, white: true }]}
								contentStyle={{
									alignItems: "center",
									backgroundColor: "maroon",
									padding: 12,
									width: "100%",
									height: "100%",
									justifyContent: "center",
								}}
							/>
						</Card>

						<Card width={300} height={150} className="mr-3">
							<Card.Section
								content={[{ text: "chalaan 2", text70: true, white: true }]}
								contentStyle={{
									alignItems: "center",
									backgroundColor: "maroon",
									padding: 12,
									width: "100%",
									height: "100%",
									justifyContent: "center",
								}}
							/>
						</Card>

						<Card width={300} height={150} className="mr-6">
							<Card.Section
								content={[{ text: "chalaan 3", text70: true, white: true }]}
								contentStyle={{
									alignItems: "center",
									backgroundColor: "maroon",
									padding: 12,
									width: "100%",
									height: "100%",
									justifyContent: "center",
								}}
							/>
						</Card>
					</ScrollView>
				</View>

				<View className="flex-1 mt-4">
					<Carousel
						animated={true}
						horizontal={true}
						loop={true}
						autoplay={true}
						containerStyle={{ borderRadius: 10 }}
						pageControlPosition="under"
					>
						{items.map((item, index) => renderItem(item, index))}
					</Carousel>
				</View>
			</View>
		</>
	);
}
