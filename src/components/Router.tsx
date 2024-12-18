import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
const Home = lazy(() => import('../pages/Home'));
const Books = lazy(() => import('../pages/Books'));
const Feedback = lazy(() => import('../pages/Feedback'));
const Contacts = lazy(() => import('../pages/Contacts'));
const About = lazy(() => import('../pages/About'));
const Story = lazy(() => import('../pages/Story'));
const Stories = lazy(() => import('../pages/Stories'));
const Illustrations = lazy(
  () =>
    import(/* webpackChunkName: "[illustrations]" */ '../pages/Illustrations')
);
const Error = lazy(() => import('../pages/Error'));
const Login = lazy(() => import('../pages/Login'));
const StoriesPanel = lazy(() => import('./admin/StoriesPanel'));
const EditStory = lazy(() => import('../pages/admin/EditStory'));
const CreateStory = lazy(() => import('../pages/admin/CreateStory'));
import ProtectedRoute from './ProtectedRoute';
import Layout from './Layout';
import Loader from './Loader';

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/illustrations" element={<Illustrations />} />
            <Route path="/books" element={<Books />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/stories" element={<Outlet />}>
              <Route index element={<Stories />} />
              <Route path=":slug" element={<Story />} />
            </Route>
            <Route
              path="/stories-panel"
              element={
                <ProtectedRoute>
                  <Outlet />
                </ProtectedRoute>
              }
            >
              <Route index element={<StoriesPanel />} />
              <Route path="create" element={<CreateStory />} />
              <Route path="edit/:slug" element={<EditStory />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
