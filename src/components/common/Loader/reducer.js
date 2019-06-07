import { START_LOADER, STOP_LOADER } from './actions';

const initialState = {
  isLoading: false,
  loadState: -1,
};

export default function loadingStatus(
  state = initialState,
  action
) {
  switch (action.type) {
    case START_LOADER:
      return {
        isLoading: true,
        loadState: action.payload,
      };
    case STOP_LOADER:
      return {
        isLoading: false,
        loadState: -1,
      };
    default:
      return state;
  }
}
