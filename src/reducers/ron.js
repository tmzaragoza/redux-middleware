const initialState = {
  facts: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_FACTS':
      return { ...state, facts: action.payload };
    case 'UPDATE_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
}

