import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import {
  StoriesActionKind,
  StoriesState,
  storiesReducer,
} from '../reducers/storiesReducer';
import { Story } from '../types';
import { QuerySnapshot } from 'firebase/firestore';
import { getFirebaseStories, getStoryBySlug } from '../services/stories';

interface StoriesContext extends StoriesState {
  onLoadMore: () => void;
  setCurrentStory: (story: Story) => void;
  getStories: () => void;
  getCurrentStory: (slug: string) => void;
}

const initalStoryState: StoriesState = {
  stories: null,
  currentStory: null,
  lastVisible: null,
  fullyFetched: false,
  loading: false,
  error: null,
};

export const StoriesStore = createContext<StoriesContext>({
  ...initalStoryState,
  onLoadMore: () => {},
  setCurrentStory: () => {},
  getStories: () => {},
  getCurrentStory: () => {},
});

const { Provider } = StoriesStore;

export const useStories = () => {
  const context = useContext(StoriesStore);
  if (!context) {
    throw new Error('useStories must be used within a StoriesProvider');
  }
  return context;
};

export function StoriesProvider({ children }: PropsWithChildren) {
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
        fetchedStories.push({ ...doc.data(), id: doc.id } as Story);
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

  useEffect(() => {
    if (!stories) {
      getStories();
    }
  }, [stories, getStories]);

  return (
    <Provider
      value={{
        ...state,
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
