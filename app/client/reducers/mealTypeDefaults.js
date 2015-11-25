import { assign } from 'lodash';

export const initialState = {
  items: [],
  ready: false,
};

export default function(state = initialState, action) {
  const { data, ready, type } = action;

  switch (type) {
  case 'MEAL_TYPE_DEFAULTS_READY':
    return assign({}, state, { ready });

  case 'MEAL_TYPE_DEFAULTS_CHANGED':
    return assign({}, state, { items: data });

  default:
    return state;
  }
}
