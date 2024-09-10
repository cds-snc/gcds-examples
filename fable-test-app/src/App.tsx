import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// GCDS Utility Framework
import '../node_modules/@cdssnc/gcds-utility/dist/gcds-utility.min.css';

// GCDS Components
import '@cdssnc/gcds-components-react/gcds.css';

// App CSS - uncomment to add custom CSS
import './App.css'

// Components (internal)
import { Container, Footer, Grid, Header, SideNav } from './components';

// Pages
import {
  About,
  FederalAndProvincialHolidays,
  Home,
  NotFound,
  OptionalHolidays,
  SubmitHoliday,
  ViewHolidays,
  ViewHolidaysNationwide
} from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Container id="main-content" size="xl" tag="main" mainContainer centered>
        <Grid columnsDesktop="320px 1fr" columns="1fr">
          <SideNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/federal-and-provincial-holidays" element={<FederalAndProvincialHolidays />} />
            <Route path="/optional-holidays" element={<OptionalHolidays />} />
            <Route path="/submit-a-holiday" element={<SubmitHoliday />} />
            <Route path="/view-holidays/:provinceId" element={<ViewHolidays />} />
            <Route path="/view-holidays/nationwide" element={<ViewHolidaysNationwide />} />

            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Grid>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;