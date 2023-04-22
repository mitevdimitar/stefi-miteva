import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Stories from '../pages/Stories';
import Illustrations from '../pages/Illustrations';

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/stories" element={<Stories />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
