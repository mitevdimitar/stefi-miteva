import { useContext, useEffect } from 'react';
import StoriesContent from '../components/stories/StoriesContent';
import { StoriesStore } from '../providers/Stories';

function Stories() {
  const { state, getStories } = useContext(StoriesStore);
  const { stories } = state;

  useEffect(() => {
    if (!stories) {
      getStories();
    }
  }, [stories, getStories]);

  return <StoriesContent />;
}

export default Stories;
