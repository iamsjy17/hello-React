import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

//Action Types
const SET_INPUT = 'input/SET_INPUT';

//Action Create Func
export const setInput = createAction(SET_INPUT);

//Reducer
const initialState = Map({
  value: ''
});

export default handleActions(
  {
    [SET_INPUT]: (state, action) => {
      return state.set('value', action.payload);
    }
  },
  initialState
);
