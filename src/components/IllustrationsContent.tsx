import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Layout from '../components/Layout';
import { useContext, useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { IllustrationsStore } from '../providers/Illustrations';
import Loader from '../components/Loader';

function IllustrationsContent() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery('(max-width:500px)');
  const { state, getIllustrations } = useContext(IllustrationsStore);
  const { illustrations, loading } = state;

  useEffect(() => {
    console.log({ illustrations });
    if (!illustrations) {
      getIllustrations();
    }
  }, [getIllustrations, illustrations]);

  const getCols = () => {
    if (isMobile) {
      return 1;
    }
    if (isSm) {
      return 2;
    }
    return 5;
  };

  return (
    <Layout isHome={false}>
      {illustrations && !loading ? (
        <Box>
          <ImageList variant="masonry" cols={getCols()} gap={8}>
            {illustrations.map((item) => (
              <ImageListItem
                key={item.img}
                style={{
                  cursor: 'pointer',
                }}
              >
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      ) : (
        <Loader />
      )}
    </Layout>
  );
}

export default IllustrationsContent;
