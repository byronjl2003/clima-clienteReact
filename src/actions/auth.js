import { types } from '../types/types';


export const logout = () => ({
    type: types.logout
})


export const login = (token, name) => ({
    type: types.login,
    payload: {
        token,
        name
    }
});