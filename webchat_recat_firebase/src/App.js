

import { SigninPage } from './Pages/SigninPage';
import RegisterPage from './Pages/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/signup" element={<SigninPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
