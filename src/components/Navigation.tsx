import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Illustrations from '../pages/Illustrations';
import Books from '../pages/Books';
import Feedback from '../pages/Feedback';
import Contacts from '../pages/Contacts';
import About from '../pages/About';
import Story from '../pages/Story';
import Stories from '../pages/Stories';
import Error from '../pages/Error';
import StoriesPanel from '../pages/admin/StoriesPanel';
import EditStory from '../pages/admin/EditStory';

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/books" element={<Books />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/:slug" element={<Story />} />
        <Route path="/stories-panel" element={<StoriesPanel />} />
        <Route path="/stories-panel/edit/:slug" element={<EditStory />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
