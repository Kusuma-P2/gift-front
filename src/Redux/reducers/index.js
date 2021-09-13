const initialState = {
    user: [],
    isLogged: false,
  };

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload.user,
          isLogged: action.payload.isLogged,
        };
  
      default:
        return state;
    }
  };