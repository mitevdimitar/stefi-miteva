import { Divider } from '@mui/material';

interface TitledDividerProps {
  title: string;
}

function TitledDivider({ title }: TitledDividerProps) {
  return (
    <Divider
      sx={{
        width: '100%',
        padding: 5,
        '& span': {
          transform: 'translateY(10px)',
          marginBottom: '20px',
        },
      }}
    >
      {title}
    </Divider>
  );
}

export default TitledDivider;
