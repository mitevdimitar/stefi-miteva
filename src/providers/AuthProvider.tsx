import { User } from 'firebase/auth';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { observeAuthState } from '../services/auth';

interface IAuthContext {
  authChecked: boolean;
  isLogged: boolean;
  user: User | null;
}

export const AuthContext = createContext<IAuthContext>({
  authChecked: false,
  isLogged: false,
  user: null,
});

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Hook useAuth must be used within AuthProvider');
  }

  return context;
};

const { Provider } = AuthContext;

export function AuthProvider({ children }: PropsWithChildren) {
  const [authChecked, setAuthChecked] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = observeAuthState((user) => {
      if (user) {
        setIsLogged(true);
        setUser(user);
      } else {
        setIsLogged(false);
        setUser(null);
      }
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Provider value={{ isLogged, user, authChecked }}>{children}</Provider>
  );
}
