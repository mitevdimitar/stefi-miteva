import { createContext, useContext, useState } from 'react';

interface AuthContext {
  isLogged: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContext>({ isLogged: false });

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Hook useAuth must be used within AuthProvider');
  }

  return context;
};

const { Provider } = AuthContext;

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLogged, _setIsLogged] = useState(false);

  return <Provider value={{ isLogged }}>{children}</Provider>;
}
