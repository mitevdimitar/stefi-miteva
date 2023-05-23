export enum StoriesActionKind {
  SET_STORY_PAGE = 'SET_STORY_PAGE',
  GET_STORY = 'GET_STORY',
  GET_PAGE_STORIES = 'GET_PAGE_STORIES',
}

// An interface for our actions
interface StoriesAction {
  type: StoriesActionKind;
  //STORY OR STORIES
  payload: any;
}

export interface StoriesState {
  allStories: any[];
  pageStories: any[] | null;
  currentStory: any;
  page: number;
}

export const initalStoryState: StoriesState = {
  allStories: [],
  pageStories: null,
  currentStory: null,
  page: 1,
};

export function storiesReducer(state: StoriesState, action: StoriesAction) {
  const { type, payload } = action;
  switch (type) {
    case StoriesActionKind.GET_STORY:
      return {
        ...state,
        //currentStory: payload,
      };
    case StoriesActionKind.SET_STORY_PAGE:
      return {
        ...state,
        page: payload,
      };
    default:
      return state;
  }
}
