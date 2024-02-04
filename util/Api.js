import axios from "axios";

const API_URL = "http://localhost:3000/auth";

export const signUpUser = async (userData) => {
	console.log(userData);
	try {
		const response = await axios.post(`${API_URL}/signup`, userData);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const loginUser = async (userData) => {
	console.log("api:", userData);
	try {
		const response = await axios.post(`${API_URL}/login`, userData);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const logoutUser = async (userData) => {
	console.log(userData);
	try {
		const response = await axios.post(`${API_URL}/logout`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const isSessionValid = async (sessionId) => {
	console.log(sessionId);
	try {
		const response = await axios.get(`${API_URL}/verifysession`, sessionId);
		if(response.data){
			console.log(response.data);
			return true;
		}
		return false;
	} catch (error) {
		throw error;
	}
};