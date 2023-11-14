import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../src/component/Header";
import Footer from '../src/component/Footer';
import Index from '../src/component/Index';
import NotFound from '../src/component/NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route
            exact
            path="/"
            element={<Index route="/" />} // Pass route prop for '/'
          />
          <Route
            path="/school"
            element={<Index route="/school" />} // Pass route prop for '/school'
          />
          <Route
            path="/college"
            element={<Index route="/college" />} // Pass route prop for '/college'
          />
          <Route
            path="/*"
            element={<NotFound />} // No route prop needed for NotFound
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
