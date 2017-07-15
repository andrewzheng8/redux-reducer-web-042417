export function manageFriends (state, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      if (action.friend) {
        const newFriend = {...action.friend}
        return {...state, friends: [...state.friends, newFriend ]}
      }
    case 'REMOVE_FRIEND':
      if (action.id) {
        const removedFriendList = [...state.friends].filter(friend => friend.id !== action.id)
        return {...state, friends: removedFriendList}
      }
    default:
      return {...state}
  }
}
