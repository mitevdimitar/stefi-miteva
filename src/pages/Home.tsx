import WelcomeBoard from '../components/WelcomeBoard';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout isHome={true}>
      <WelcomeBoard />
    </Layout>
  );
}

export default Home;
