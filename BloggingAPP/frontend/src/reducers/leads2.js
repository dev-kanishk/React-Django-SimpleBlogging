import { ALL_LEADS } from '../actions/types.js';

const initialState = {
  leads2: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ALL_LEADS:
      return {
        ...state,
        leads2: action.payload,
      };
    
    default:
      return state;
  }
}