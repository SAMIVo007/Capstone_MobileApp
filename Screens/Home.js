import { Image, ScrollView, Text, TextInput,SafeAreaView, View } from "react-native";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
// import Card from "../Components/card";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Carousel, Card } from "react-native-ui-lib";


export default function HomePage() {
	const items = [1, 2, 3, 4];

	const renderItem = (item, index) => {
		return (
			<View
				key={index}
				style={{
					justifyContent: "center",
					alignItems: "center",
					// padding: 12,
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
			<StatusBar style="light" />

			<View className="flex-1 ">
				<View className="bg-primaryBlue rounded-b-3xl p-4 pt-14">
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

						<View className="flex-row justify-between ">
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
					<Text className="text-white text-xl font-bold pt-6 pb-1">
						Welcome, User
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
