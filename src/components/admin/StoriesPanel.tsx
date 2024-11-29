import { Stack } from '@mui/material';
import Layout from '../Layout';
import { useContext } from 'react';
import { StoriesStore } from '../../providers/stories';
import StoryRow from './StoryRow';
import { useAuth } from '../../providers/auth';

function StoriesPanel() {
  const {
    state: { stories },
  } = useContext(StoriesStore);
  const { isLogged } = useAuth();
  console.log({ isLogged });

  return (
    <Layout>
      <Stack gap={1} alignItems={'start'} width={'100%'}>
        {isLogged ? (
          <div>Not logged in</div>
        ) : (
          stories?.map((story, ind) => {
            return <StoryRow key={ind} story={story} />;
          })
        )}
      </Stack>
    </Layout>
  );
}

export default StoriesPanel;
