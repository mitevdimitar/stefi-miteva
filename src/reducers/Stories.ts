import { Story } from '../utils/types';

export enum StoriesActionKind {
  GET_STORY = 'GET_STORY',
  GET_STORIES = 'GET_STORIES',
  SET_LAST_VISIBLE = 'SET_LAST)VISIBLE',
  SET_FULLY_FETCHED = 'SET_FULLY_FETCHED',
}

// An interface for our actions
interface StoriesAction {
  type: StoriesActionKind;
  payload: any;
}

export interface StoriesState {
  stories: Story[] | null;
  currentStory: Story | null;
  lastVisible: any;
  fullyFetched: boolean;
}

export const initalStoryState: StoriesState = {
  stories: null,
  currentStory: null,
  lastVisible: null,
  fullyFetched: false,
};

export function storiesReducer(state: StoriesState, action: StoriesAction) {
  const { type, payload } = action;
  switch (type) {
    case StoriesActionKind.GET_STORIES:
      return {
        ...state,
        stories: payload,
      };
    case StoriesActionKind.GET_STORY:
      return {
        ...state,
        currentStory: payload,
      };
    case StoriesActionKind.SET_LAST_VISIBLE:
      return {
        ...state,
        lastVisible: payload,
      };
    case StoriesActionKind.SET_FULLY_FETCHED:
      return {
        ...state,
        fullyFetched: payload,
      };
    default:
      return state;
  }
}
