import { createContext, useReducer } from 'react';
import {
  StoriesActionKind,
  StoriesState,
  initalStoryState,
  storiesReducer,
} from '../reducers/Stories';

interface StoriesContext {
  state: StoriesState;
  onPageChange: (page: number) => void;
}

interface StoriesProviderProps {
  children: React.ReactNode;
}

export const StoriesStore = createContext<StoriesContext>({
  state: initalStoryState,
  onPageChange: () => {},
});

const { Provider } = StoriesStore;

export function StoriesProvider({ children }: StoriesProviderProps) {
  const [state, dispatch] = useReducer(storiesReducer, initalStoryState);

  const onPageChange = (page: number) => {
    dispatch({
      type: StoriesActionKind.SET_STORY_PAGE,
      payload: page,
    });
  };

  return (
    <Provider
      value={{
        state,
        onPageChange,
      }}
    >
      {children}
    </Provider>
  );
}
