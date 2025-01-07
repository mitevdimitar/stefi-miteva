import StoryForm from '../../components/admin/StoryForm';
import { useStories } from '../../providers/StoriesProvider';

function EditStory() {
  const { currentStory } = useStories();
  return <StoryForm story={currentStory} />;
}

export default EditStory;
