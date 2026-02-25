import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// GCDS CSS shortcuts
import "@gcds-core/css-shortcuts/dist/gcds-css-shortcuts.min.css";

// GCDS Components
import "@gcds-core/components-react/gcds.css";

// App CSS - uncomment to add custom CSS
import "./App.css";

// Components (internal)
import { Container, Footer, Grid, Header, SideNav } from "./components";

// Pages
import {
  About,
  FederalAndProvincialHolidays,
  Home,
  NotFound,
  OptionalHolidays,
  SubmitHoliday,
  Table,
  ViewHolidays,
  ViewHolidaysNationwide,
} from "./pages";
import TableGridJS from "./pages/TableGridJS.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Container id="main-content" tag="main" layout="page">
        <Grid columnsDesktop="320px 1fr" columns="1fr" display="grid">
          <SideNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/federal-and-provincial-holidays"
              element={<FederalAndProvincialHolidays />}
            />
            <Route path="/optional-holidays" element={<OptionalHolidays />} />
            <Route path="/submit-a-holiday" element={<SubmitHoliday />} />
            <Route path="/table" element={<Table />} />
            <Route path="/table-gridjs" element={<TableGridJS />} />
            <Route
              path="/view-holidays/:provinceId"
              element={<ViewHolidays />}
            />
            <Route
              path="/view-holidays/nationwide"
              element={<ViewHolidaysNationwide />}
            />

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
