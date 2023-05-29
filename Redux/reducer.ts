import {ADDTASK} from './contants';

const initialState: any = [];

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADDTASK:
      return [...state, action.data];
    default:
      return state;
  }
};
