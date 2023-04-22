import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Stories from '../pages/Stories';
import Paintings from '../pages/Paintings';

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/stories" element={<Stories />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
