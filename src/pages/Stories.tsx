import { useContext, useEffect } from 'react';
import StoriesContent from '../components/stories/StoriesContent';
import { StoriesStore } from '../providers/Stories';

function Stories() {
  const { state, getStories } = useContext(StoriesStore);
  const { stories } = state;

  //this should go in stories page!
  useEffect(() => {
    if (!stories) {
      getStories();
    }
  }, [stories, getStories]);

  return <StoriesContent />;
}

export default Stories;
