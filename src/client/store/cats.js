import axios from 'axios'


// ACTION TYPES
// YOU MAKE THEM!!
// check the test specs for to actually write tho

// INITIAL STATE
// what would be a good initial state?
// :thinking:
const initialState = undefined

// ACTION CREATORS
export const loadCats = data => ({
  // some stuff might go in here? hmmmmm.....
})


// THUNK CREATORS
export const fetchCats = () => async dispatch => {
  // YOUR CODE HERE
}

// REDUCER
// just modify inside the switch statement by adding cases.
// don't modify what the function takes
export default function (state = initialState, action) {
  switch (action.type) {


    default: return state;
  }
}