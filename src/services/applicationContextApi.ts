import axios from './axiosUtils'
import { AxiosResponse } from 'axios'

const getApplicationContext = async (): Promise<AxiosResponse> => {
    return await axios.getInstance().get(`/application/context`)
}

const submitForm = async (): Promise<AxiosResponse> => {
    return await axios.getInstance().post(`/register/profile`, {name: 'Test Name'})
}

const getFormData = async (): Promise<AxiosResponse> => {
    return await axios.getInstance().get(`/user`)
}


const getErrorData = async (): Promise<AxiosResponse> => {
    return await axios.getInstance().get(`/error`)
}

const ApplicationContextAPI = {
    getApplicationContext,
    submitForm,
    getFormData,
    getErrorData
}

export default ApplicationContextAPI
