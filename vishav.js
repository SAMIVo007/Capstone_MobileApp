import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Button,
} from "react-native";
import PrimaryButton from "../Components/primaryButton";
import Colors from "../Components/Colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Yup from "yup";
import { Formik } from "formik";
import DateTimePicker from "@react-native-community/datetimepicker";
import { signUpUser } from "../util/Api";

export default function SignUpPage({ navigation }) {
	const handleSubmit = async (values) => {
		try {
			await signUpUser(values);
			navigation.navigate("Login");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				password: "",
			}}
			onSubmit={handleSubmit}
		>
			{({ handleChange, handleSubmit, values }) => (
				<View className="mt-16">
					<TextInput
						placeholder="Name"
						onChangeText={handleChange("name")}
						value={values.name}
					/>

					<TextInput
						placeholder="Email"
						onChangeText={handleChange("email")}
						value={values.email}
					/>

					<TextInput
						secureTextEntry
						placeholder="Password"
						onChangeText={handleChange("password")}
						value={values.password}
					/>

					<Button title="Sign Up" onPress={handleSubmit} />
				</View>
			)}
		</Formik>
	);
}
