import { Story } from '../types';

export enum StoriesActionKind {
  INITIATE_FETCHING = 'INITIATE_FETCHING',
  FINISH_FETCHING = 'FINISH_FETCHING',
  GET_STORY = 'GET_STORY',
  GET_STORIES = 'GET_STORIES',
  SET_LAST_VISIBLE = 'SET_LAST_VISIBLE',
  SET_FULLY_FETCHED = 'SET_FULLY_FETCHED',
  SET_CURRENT_STORY = 'SET_CURRENT_STORY',
  SET_ERROR = 'SET_ERROR',
}

// An interface for our actions
interface StoriesAction {
  type: StoriesActionKind;
  payload?: any;
}

export interface StoriesState {
  stories: Story[] | null;
  currentStory: Story | null;
  lastVisible: any;
  fullyFetched: boolean;
  loading: boolean;
  error: null | string;
}

export const initalStoryState: StoriesState = {
  stories: null,
  currentStory: null,
  lastVisible: null,
  fullyFetched: false,
  loading: false,
  error: null,
};

export function storiesReducer(state: StoriesState, action: StoriesAction) {
  switch (action.type) {
    case StoriesActionKind.INITIATE_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case StoriesActionKind.FINISH_FETCHING:
      return {
        ...state,
        loading: false,
      };
    case StoriesActionKind.GET_STORIES:
      return {
        ...state,
        stories: action.payload,
      };
    case StoriesActionKind.GET_STORY:
      return {
        ...state,
        currentStory: action.payload,
      };
    case StoriesActionKind.SET_CURRENT_STORY:
      return {
        ...state,
        currentStory: action.payload,
      };
    case StoriesActionKind.SET_LAST_VISIBLE:
      return {
        ...state,
        lastVisible: action.payload,
      };
    case StoriesActionKind.SET_FULLY_FETCHED:
      return {
        ...state,
        fullyFetched: action.payload,
      };
    case StoriesActionKind.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
