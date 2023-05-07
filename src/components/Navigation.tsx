import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Stories from '../pages/Stories';
import Illustrations from '../pages/Illustrations';
import Books from '../pages/Books';
import Feedback from '../pages/Feedback';
import Contacts from '../pages/Contacts';
import About from '../pages/About';

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/stories" element={<Stories />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/books" element={<Books />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
