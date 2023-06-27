import { createContext, useCallback, useReducer } from 'react';
import {
  IllustrationsActionKind,
  IllustrationsState,
  illustrationsReducer,
  initalIllustrationsState,
} from '../reducers/Illustrations';
import { getStorageIllustrations } from '../services/illustrations';

interface IllustrationsContext {
  state: IllustrationsState;
  getIllustrations: () => void;
}

interface IllustrationsProviderProps {
  children: React.ReactNode;
}

export const IllustrationsStore = createContext<IllustrationsContext>({
  state: initalIllustrationsState,
  getIllustrations: () => {},
});

const { Provider } = IllustrationsStore;

export function IllustrationsProvider({
  children,
}: IllustrationsProviderProps) {
  const [state, dispatch] = useReducer(
    illustrationsReducer,
    initalIllustrationsState
  );

  const getIllustrations = useCallback(async () => {
    dispatch({
      type: IllustrationsActionKind.INITIATE_FETCHING,
    });

    const fetchedIllustrations = await getStorageIllustrations();
    console.log({ fetchedIllustrations });
    dispatch({
      type: IllustrationsActionKind.GET_ILLUSTRATIONS,
      payload: fetchedIllustrations,
    });
    dispatch({
      type: IllustrationsActionKind.FINISH_FETCHING,
    });
  }, []);

  return (
    <Provider
      value={{
        state,
        getIllustrations,
      }}
    >
      {children}
    </Provider>
  );
}
