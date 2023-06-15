import { createContext, useCallback, useReducer } from 'react';
import {
  StoriesActionKind,
  StoriesState,
  initalStoryState,
  storiesReducer,
} from '../reducers/Stories';
import {
  query,
  collection,
  orderBy,
  limit,
  getDocs,
  startAfter,
} from 'firebase/firestore';
import { db } from '../services/firebase';
import { Story } from '../utils/types';
import { QuerySnapshot } from 'firebase/firestore';

interface StoriesContext {
  state: StoriesState;
  onLoadMore: () => void;
  setCurrentStory: (story: Story) => void;
  getStories: () => void;
}

interface StoriesProviderProps {
  children: React.ReactNode;
}

export const StoriesStore = createContext<StoriesContext>({
  state: initalStoryState,
  onLoadMore: () => {},
  setCurrentStory: () => {},
  getStories: () => {},
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
    const newQuery = lastVisible
      ? query(
          collection(db, 'stories'),
          orderBy('date_created', 'desc'),
          startAfter(lastVisible),
          limit(9)
        )
      : query(
          collection(db, 'stories'),
          orderBy('date_created', 'desc'),
          limit(10)
        );

    const documentSnapshot = await getDocs(newQuery);
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

  return (
    <Provider
      value={{
        state,
        onLoadMore,
        setCurrentStory,
        getStories,
      }}
    >
      {children}
    </Provider>
  );
}
