import { AsyncStorage } from "react-native"
import axios from 'axios'

/**
 * Its a service for passing token to authorization field of request's header of each axios request
 */
export function HttpService() {
	let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YmMyM2VkZjBmZmNmMDAxZWQ4ZWFjNzMifQ.Vft-Rk-VEQ5Uq8z3OHRLd7JfdoTIqPNi_yYYbz7yo7g';
	const defaultOptions = {
		headers: {
				Authorization: token,
		},
	};

	return {
			get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
			post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
			put: (url, data, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
			delete: (url, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
	};
}