import { FC, createContext, useContext, useState, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="right" />;
}

interface NotificationContextType {
  showNotification: (
    message: string | ReactNode,
    duration?: number | null
  ) => void;
  hideNotification: () => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string | ReactNode>('');
  const [autoHideDuration, setAutoHideDuration] = useState<number | null>(null);

  const showNotification = (
    msg: string | ReactNode,
    duration: number | null = null
  ) => {
    setMessage(msg);
    setAutoHideDuration(duration);
    setOpen(true);
  };

  const hideNotification = () => {
    setOpen(false);
  };

  return (
    <NotificationContext.Provider
      value={{ showNotification, hideNotification }}
    >
      {children}
      {ReactDOM.createPortal(
        <Snackbar
          open={open}
          onClose={hideNotification}
          TransitionComponent={SlideTransition}
          message={message}
          autoHideDuration={autoHideDuration}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          sx={{
            top: '80px !important',
            '& .MuiSnackbarContent-root': {
              backgroundColor: (theme) => theme.palette.primary.main,
            },
          }}
        />,
        document.body
      )}
    </NotificationContext.Provider>
  );
};

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider'
    );
  }
  return context;
}
