import { HashRouter, Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import LargeForm from "./pages/LargeForm";
import MultiTest from "./pages/MultiTest";
import NotFound from "./pages/NotFound";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";

import recipes from '../src/data/recipes.json'

import '../node_modules/@cdssnc/gcds-utility/dist/gcds-utility.min.css';
import '@cdssnc/gcds-components-react/gcds.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route exact index element={<Home />} />
            <Route exact path="submit-recipe" element={<MultiTest />} />
            <Route exact path="cupcake-delivery" element={<LargeForm />} />
            <Route exact path="recipes" element={<Recipes />} />
            <Route exact path="/recipe/:url" element={<Recipe recipes={recipes} />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;