import Layout from '../../components/Layout';
import StoryForm from './StoryForm';

function CreateStory() {
  return (
    <Layout isHome={false}>
      <StoryForm />
    </Layout>
  );
}

export default CreateStory;
