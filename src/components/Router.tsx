import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Home from '../pages/Home';
import Illustrations from '../pages/Illustrations';
import Books from '../pages/Books';
import Feedback from '../pages/Feedback';
import Contacts from '../pages/Contacts';
import About from '../pages/About';
import Story from '../pages/Story';
import Stories from '../pages/Stories';
import Error from '../pages/Error';
import StoriesPanel from './admin/StoriesPanel';
import EditStory from '../pages/admin/EditStory';
import CreateStory from '../pages/admin/CreateStory';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';

export default function AppRouter() {
  return (
    <Router>
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
    </Router>
  );
}
