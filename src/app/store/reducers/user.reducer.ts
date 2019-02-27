export interface IUser {
    name: string;
    bonuses: number;
}

const initialState: IUser = {
    name: 'Igor',
    bonuses: 0.8
};

// {type:'', payload}
export function userReducer(state: IUser = initialState, action) {
    return state;
}
