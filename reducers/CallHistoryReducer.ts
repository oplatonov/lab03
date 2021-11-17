import { combineReducers } from 'redux';

export const INITIAL_STATE: ICallHistoryState = {
  History: []
};

export interface ICallHistoryState {
  History: number[];
}

export interface ICallHistoryAction {
  type: 'PUSH_CALL' | 'GET_CALLS';
  payload: number;
}

const callHistoryReducer = (
  state = INITIAL_STATE,
  action: ICallHistoryAction
): ICallHistoryState => {
  switch (action.type) {
    case 'PUSH_CALL':
      const { History } = state;
      return { History: [action.payload, ...History] };
    default:
      return state;
  }
};

export default combineReducers({
  CallHistory: callHistoryReducer,
});
