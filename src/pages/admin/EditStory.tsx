import StoryForm from '../../components/admin/StoryForm';
import { useStories } from '../../providers/StoriesProvider';

function EditStory() {
  const {
    state: { currentStory },
  } = useStories();
  console.log({ currentStory });
  return <StoryForm />;
}

export default EditStory;
