import { AsyncStorage } from "react-native"

export const AuthService = () => {

	let isAuth = () => {
		try {
			const token = AsyncStorage.getItem('token');
			if (token !== null){
				return false;
			}
		} catch(error) {
			console.log(error)
			return true;
		}
	}

	return {
		isAuth : isAuth
	}
}