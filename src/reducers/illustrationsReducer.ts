import { Illustration } from '../types';

export enum IllustrationsActionKind {
  INITIATE_FETCHING = 'INITIATE_FETCHING',
  FINISH_FETCHING = 'FINISH_FETCHING',
  GET_ILLUSTRATIONS = 'GET_ILLUSTRATIONS',
}

// An interface for our actions
interface IllustrationsAction {
  type: IllustrationsActionKind;
  payload?: any;
}

export interface IllustrationsState {
  illustrations: Illustration[] | null;
  loading: boolean;
  error: null | string;
}

export const initalIllustrationsState: IllustrationsState = {
  illustrations: null,
  loading: false,
  error: null,
};

export function illustrationsReducer(
  state: IllustrationsState,
  action: IllustrationsAction
) {
  switch (action.type) {
    case IllustrationsActionKind.INITIATE_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case IllustrationsActionKind.FINISH_FETCHING:
      return {
        ...state,
        loading: false,
      };
    case IllustrationsActionKind.GET_ILLUSTRATIONS:
      return {
        ...state,
        illustrations: action.payload,
      };
    default:
      return state;
  }
}
