import { TOGGLE_SIDEBAR } from './actions';

const initialState = {
  isExpanded: true
};

export default function sidebarStatus(
  state = initialState,
  action
) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        isExpanded: !state.
      };
    default:
      return state;
  }
}
