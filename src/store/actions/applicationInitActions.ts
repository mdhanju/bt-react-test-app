import { Dispatch } from 'react'
import service from '../../services/applicationContextApi'
type Payload = any;


type Window = typeof window & {
  BT_CONFIG: Payload;
  REGISTER: Payload;
  PROFILE: Payload;
  ERROR: Payload;
};

export type ApplicationInitAction = {
  type: string;
  payload: Payload;
};

export type RegisterAction = {
  type: string;
  payload: Payload;
};

export type ProfileAction = {
  type: string;
  payload: Payload;
};

export type ErrorAction = {
  type: string;
  payload: Payload;
};

export const APP_INIT_LOAD = 'APP_INIT_LOAD'
export const APP_INIT_ERROR = 'APP_INIT_ERROR'
export const APP_ERROR = 'APP_ERROR'
export const APP_PROFILE = 'APP_PROFILE'
export const APP_PROFILE_REGISTER = 'APP_PROFILE_REGISTER'

const loadAppInitContextData = (payload: Payload): ApplicationInitAction => ({
    type: APP_INIT_LOAD,
    payload
})

const appInitError = (payload: Payload): ApplicationInitAction => ({
    type: APP_INIT_ERROR,
    payload
})

const profileRegisterData = (payload: Payload): RegisterAction => ({
    type: APP_PROFILE_REGISTER,
    payload
})

const loadProfileData = (payload: Payload): ProfileAction => ({
    type: APP_PROFILE,
    payload
})


const appProfileError = (payload: Payload): ErrorAction => ({
    type: APP_ERROR,
    payload
})

export const initializeApp = () => async (
    dispatch: Dispatch<ApplicationInitAction>
): Promise<void> => {
    let config = {}
    try {
        config = (window as Window).BT_CONFIG.config
        dispatch(loadAppInitContextData({ config }))
    } catch (err) {
        dispatch(appInitError({ config }))
        console.log(err)
    }
}

export const submitForm = () => async (
    dispatch: Dispatch<RegisterAction>
): Promise<void> => {
    try {
        const register = await service.submitForm()
        dispatch(profileRegisterData({ register: register.data }))
    } catch (err) {
        console.log(err)
    }
}



export const getFormData = () => async (
    dispatch: Dispatch<ProfileAction>
): Promise<void> => {
    try {
        const profile = await service.getFormData()
        dispatch(loadProfileData({ profile: profile.data }))
    } catch (err) {
        console.log(err)
    }
}

export const getErrorData = () => async (
    dispatch: Dispatch<ErrorAction>
): Promise<void> => {
    try {
        const error = await service.getErrorData()
        dispatch(appProfileError({ error: error.data }))
    } catch (err) {
        console.log(err)
    }
}
