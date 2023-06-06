import { createContext, useCallback, useEffect, useReducer } from 'react';
import {
  StoriesActionKind,
  StoriesState,
  initalStoryState,
  storiesReducer,
} from '../reducers/Stories';
import { query, collection, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase';
import { Story } from '../utils/types';

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
  const { stories } = state;

  const onPageChange = (page: number) => {
    dispatch({
      type: StoriesActionKind.SET_STORY_PAGE,
      payload: page,
    });
  };

  const getStories = useCallback(async () => {
    const newQuery = query(
      collection(db, 'stories'),
      orderBy('date_created', 'desc'),
      limit(10)
    );

    const documentSnapshots = await getDocs(newQuery);

    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    dispatch({
      type: StoriesActionKind.SET_LAST_VISIBLE,
      payload: lastVisible,
    });

    //extract stories
    const fetchedStories: Story[] = [];
    documentSnapshots.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      fetchedStories.push(doc.data() as Story);
    });
    console.log({ fetchedStories });
    dispatch({
      type: StoriesActionKind.GET_STORIES,
      payload: fetchedStories,
    });
  }, []);

  useEffect(() => {
    if (!stories) {
      getStories();
    }
  }, [stories, getStories]);

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
