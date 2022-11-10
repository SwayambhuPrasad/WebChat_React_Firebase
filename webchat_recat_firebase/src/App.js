

import { SigninPage } from './Pages/SigninPage';
import RegisterPage from './Pages/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './Pages/Home';
import { Profile } from './Components/Profile'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={< Profile />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/Home" element={<Home />} /> */}
        </Routes>
      </Router>
    </>
  );
}
export default App;
