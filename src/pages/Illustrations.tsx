import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Layout from '../components/Layout';
import { useCallback, useEffect, useState } from 'react';
import { storage } from '../services/firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { Illustration } from '../utils/types';

function Illustrations() {
  const [illustrationLinks, setIllustrationLinks] = useState<Illustration[]>(
    []
  );
  const getIllustrations = useCallback(async () => {
    const listRef = ref(storage, 'illustrations');

    try {
      let fetchedUrls: Illustration[] = [];
      const result = await listAll(listRef);
      await Promise.all(
        result.items.map(async (itemRef, i) => {
          const url = await getDownloadURL(itemRef);
          const illustration = {
            img: url,
            title: `illustration${i}`,
          };
          fetchedUrls.push(illustration);
        })
      );
      setIllustrationLinks(fetchedUrls);
    } catch (err) {
      console.log({ err });
    }
  }, []);

  useEffect(() => {
    getIllustrations();
  }, [getIllustrations]);

  return (
    <Layout isHome={false}>
      <Box>
        <ImageList variant="masonry" cols={5} gap={8}>
          {illustrationLinks.map((item) => (
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
    </Layout>
  );
}

export default Illustrations;
