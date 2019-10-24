export const favorites = (state =[], action) => {
  switch (action.key) {
    case 'SET_FAVORITES':
      return action.favorites
  
    default:
      return state;
  }
}