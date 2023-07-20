import { Grid, styled } from '@mui/material';

interface YouTubeEmbedProps {
  embedId: string;
}

const YouTubeContainer = styled(Grid)(() => ({
  overflow: 'hidden',
  paddingBottom: '56.25%',
  position: 'relative',
  height: 0,
  '& iframe': {
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
}));

const YoutubeEmbed = ({ embedId }: YouTubeEmbedProps) => (
  <YouTubeContainer>
    <iframe
      width="862"
      height="485"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      title="Осмото Кралство - Стефания Митева"
    />
  </YouTubeContainer>
);

export default YoutubeEmbed;
