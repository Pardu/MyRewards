export const initialState = {
  user: {
    id: 1,
    name: "Jane Doe",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    given: "100",
    recieved: "250",
  }
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}