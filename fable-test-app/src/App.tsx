import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// GCDS Utility Framework
import '../node_modules/@cdssnc/gcds-utility/dist/gcds-utility.min.css';

// GCDS Components
import '@cdssnc/gcds-components-react/gcds.css';

// App CSS - uncomment to add custom CSS
// import './App.css'

// Components (internal)
import { Container, Header, Footer } from './components';

// Pages
import {
  About,
  Home,
  NotFound,
  SubmitHoliday,
  ViewHolidays
} from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Container id="main-content" size="xl" tag="main" mainContainer centered>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/submit-a-holiday" element={<SubmitHoliday />} />
          <Route path="/view-holidays" element={<ViewHolidays />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;