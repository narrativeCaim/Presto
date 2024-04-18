import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Login from './login/Login';
import Register from './register/Register';
import Home from './dashboard/Home';
import Presentation from './presentation/Presentation';
import PresentationPreView from './presentation/PresentationPreView';

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="presentation/:presentationId" element={<Presentation />} />
          <Route path="presentation/:presentationId/preview" element={<PresentationPreView />} />
          {/* 这里可以添加更多需要在 Layout 中渲染的路由 */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
