import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
/*import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PostPage from './pages/PostPage';*/

const App = () => {
  return (
      <Router>
        <Routes>
          {/*                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/post/:id" element={<PostPage />} />*/}
          <Route path="/" element={<HomePage  name="fsdfsd"/>} />
        </Routes>
      </Router>
  );
};

export default App;
