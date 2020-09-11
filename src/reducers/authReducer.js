import { types } from '../types/types';

const initialState = {
    token: 'ANONYMUS',
    name: 'ANONYMUS',

}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            {
                return {
                    token: action.payload.token,
                    name: action.payload.name
                }
            }
        default:
            return state;
    }
}