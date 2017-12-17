import {
    SELECT_MAC_ADDRES
  } from '../actions/types';
  
  const INITIAL_STATE = {
    macAddres: ''
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SELECT_MAC_ADDRES: {
        return {
          ...state,
          macAddres: action.payload
        };
      }
      default:
        return state;
    }
  };