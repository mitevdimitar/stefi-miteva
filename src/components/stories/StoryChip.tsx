import { Chip } from '@mui/material';

interface StoryChipProps {
  label: string;
  isPreview?: boolean;
  styles?: React.CSSProperties;
}

function StoryChip({ label, styles, isPreview }: StoryChipProps) {
  const getBackgroundColor = () => {
    switch (label) {
      case 'Ново':
        return '#EDE6FF';
      case 'Първа награда':
        return '#AFEEEE';
      case 'Втора награда':
        return '#DB7093';
      case 'Трета награда':
        return '#D4FEF0';
      case 'Поощрение':
        return '#8FBC8F';
      default:
        return '#FFDAB9';
    }
  };

  const getColor = () => {
    switch (label) {
      case 'Ново':
        return '#8C78C4';
      case 'Първа награда':
        return '#597A84';
      case 'Втора награда':
        return '#F1C6D4';
      case 'Трета награда':
        return '#62A070';
      case 'Поощрение':
        return 'white';
      default:
        return '#79726F';
    }
  };
  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: getBackgroundColor(),
        color: getColor(),
        borderRadius: '8px',
        marginTop: isPreview ? 1 : 0,
        marginBottom: 1,
        width: 'fit-content',
        ...styles,
      }}
    />
  );
}

export default StoryChip;
