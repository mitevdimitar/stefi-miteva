import { createContext, useCallback, useReducer } from 'react';
import {
  StoriesActionKind,
  StoriesState,
  initalStoryState,
  storiesReducer,
} from '../reducers/Stories';
import { Story } from '../utils/types';
import { QuerySnapshot } from 'firebase/firestore';
import { getFirebaseStories, getStoryBySlug } from '../services/stories';

interface StoriesContext {
  state: StoriesState;
  onLoadMore: () => void;
  setCurrentStory: (story: Story) => void;
  getStories: () => void;
  getCurrentStory: (slug: string) => void;
}

interface StoriesProviderProps {
  children: React.ReactNode;
}

export const StoriesStore = createContext<StoriesContext>({
  state: initalStoryState,
  onLoadMore: () => {},
  setCurrentStory: () => {},
  getStories: () => {},
  getCurrentStory: () => {},
});

const { Provider } = StoriesStore;

export function StoriesProvider({ children }: StoriesProviderProps) {
  const [state, dispatch] = useReducer(storiesReducer, initalStoryState);
  const { stories, fullyFetched, lastVisible } = state;

  const setLastVisible = useCallback((snapshot: QuerySnapshot) => {
    const lastVisible = snapshot.docs[snapshot.docs.length - 1];
    dispatch({
      type: StoriesActionKind.SET_LAST_VISIBLE,
      payload: lastVisible,
    });
  }, []);

  const addStories = useCallback(
    (snapshot: QuerySnapshot) => {
      const fetchedStories: Story[] = stories ? [...stories] : [];
      snapshot.forEach((doc) => {
        fetchedStories.push(doc.data() as Story);
      });
      dispatch({
        type: StoriesActionKind.GET_STORIES,
        payload: fetchedStories,
      });
      if (snapshot.size < 9) {
        dispatch({
          type: StoriesActionKind.SET_FULLY_FETCHED,
          payload: true,
        });
      }
    },
    [stories]
  );

  const getStories = useCallback(async () => {
    dispatch({
      type: StoriesActionKind.INITIATE_FETCHING,
    });
    const documentSnapshot = await getFirebaseStories(lastVisible);
    setLastVisible(documentSnapshot);
    addStories(documentSnapshot);
    dispatch({
      type: StoriesActionKind.FINISH_FETCHING,
    });
  }, [addStories, setLastVisible, lastVisible]);

  const onLoadMore = useCallback(() => {
    if (fullyFetched) return;
    getStories();
  }, [fullyFetched, getStories]);

  const setCurrentStory = (story: Story) => {
    dispatch({
      type: StoriesActionKind.SET_CURRENT_STORY,
      payload: story,
    });
  };

  const setError = (error: string) => {
    dispatch({
      type: StoriesActionKind.SET_ERROR,
      payload: error,
    });
  };

  const getCurrentStory = useCallback(async (slug: string) => {
    const matchedStory = await getStoryBySlug(slug);
    if (matchedStory) {
      setCurrentStory(matchedStory);
    } else {
      setError('Изглежда няма такава приказка!');
    }
  }, []);

  return (
    <Provider
      value={{
        state,
        onLoadMore,
        setCurrentStory,
        getStories,
        getCurrentStory,
      }}
    >
      {children}
    </Provider>
  );
}
