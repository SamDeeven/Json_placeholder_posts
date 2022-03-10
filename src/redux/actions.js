export const getUsers = (users) => async dispatch =>{
    dispatch({
        type:"GET_USERS",
        payload: users
    })
}

export const userInfo = (user) => async dispatch =>{
    dispatch({
        type:"USER_INFO",
        payload: user
    })
}

