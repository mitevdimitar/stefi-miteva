import { Story } from '../utils/types';

export enum StoriesActionKind {
  SET_STORY_PAGE = 'SET_STORY_PAGE',
  GET_STORY = 'GET_STORY',
  GET_STORIES = 'GET_STORIES',
  SET_LAST_VISIBLE = 'SET_LAST)VISIBLE',
}

// An interface for our actions
interface StoriesAction {
  type: StoriesActionKind;
  payload: any;
}

export interface StoriesState {
  stories: Story[] | null;
  currentStory: Story | null;
  page: number;
  lastVisible: any;
}

export const initalStoryState: StoriesState = {
  stories: null,
  currentStory: null,
  page: 1,
  lastVisible: null,
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
    case StoriesActionKind.SET_STORY_PAGE:
      return {
        ...state,
        page: payload,
      };
    case StoriesActionKind.SET_LAST_VISIBLE:
      return {
        ...state,
        lastVisible: payload,
      };
    default:
      return state;
  }
}
