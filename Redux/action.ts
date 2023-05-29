import {ADDTASK} from './contants';

export const addTask = (item: any) => {
  return {
    type: ADDTASK,
    data: item,
  };
};
