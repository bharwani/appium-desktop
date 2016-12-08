import Immutable from 'immutable';

import { SET_SOURCE_AND_SCREENSHOT, QUIT_SESSION_REQUESTED, QUIT_SESSION_DONE } from '../actions/Inspector';

// Make sure there's always at least one cap
const INITIAL_STATE = {
};

export default function inspector (state=INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SOURCE_AND_SCREENSHOT:
      return Immutable.fromJS(state)
        .set('source', action.source)
        .set('screenshot', action.screenshot)
        .toJS();

    case QUIT_SESSION_REQUESTED:
      return Immutable.fromJS(state)
        .set('isQuittingSession', true)
        .toJS();

    case QUIT_SESSION_DONE:
      return Immutable.fromJS(state)
        .delete('isQuittingSession')
        .toJS();

    default:
      return {...state};
  }
}