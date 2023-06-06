import { StoriesProvider } from '../providers/Stories';
import StoriesContent from '../components/stories/StoriesContent';

function Stories() {
  return (
    <StoriesProvider>
      <StoriesContent />
    </StoriesProvider>
  );
}

export default Stories;
