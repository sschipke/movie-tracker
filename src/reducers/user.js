export const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_NEW_USER':
      return action.user
  
    default:
      return state;
  }
}