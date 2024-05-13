import axios from 'axios';
import API_URL from '../../config/api-url';
import * as SecureStorage from 'expo-secure-store'

export const register = async (data) => {
    return axios.post(API_URL + '/user/register', data)
        .then((res) => {
            return { ...res?.data, success: true }
        })
        .catch((err) => {
            
            console.log(err);
            return err?.response?.data;
        }
        )

}



export const login = async (data) => {
    return axios.post(API_URL + '/user/login', data)
        .then((res) => {
            return res?.data
        })
        .catch((err) => {
            return err?.response?.data;
        }
        )

}




