import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Start';
import RiskProfile from './pages/RiskProfile';
import Locations from './pages/Locations';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Start />} />
      <Route path="/risk/:crop" element={<RiskProfile />} />
      <Route path="/risk/:crop/locations" element={<Locations />} />
    </Routes>
  );
}

export default App;
