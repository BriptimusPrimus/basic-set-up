const initialState = {
  dummyData: {}
}

function dummyData(state={}, action) {
  return state;
}

export default function reducer(state = initialState, action) {
  return {
    dummyData: dummyData(state.dummyData, action)
  }
}
