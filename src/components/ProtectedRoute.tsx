import { Navigate, useLocation } from 'react-router-dom';
import { FC, PropsWithChildren } from 'react';
import { useAuth } from '../providers/auth';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { isLogged } = useAuth();
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
