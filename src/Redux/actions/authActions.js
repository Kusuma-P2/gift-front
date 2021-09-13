export const dispatchLogin = (res,isLogged) => {
    return {
        type: 'LOGIN',
        payload: {
            user: res.data,
            isLogged
        }
    }
}