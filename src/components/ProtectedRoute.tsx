import { Navigate, useLocation } from 'react-router-dom';
import { FC, PropsWithChildren } from 'react';
import { useAuth } from '../providers/auth';
import Loader from './Loader';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { isLogged, authChecked } = useAuth();
  const location = useLocation();

  if (!authChecked) {
    return <Loader />;
  }

  if (!isLogged) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
