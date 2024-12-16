import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home'
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Router>
        <p>Navigation</p>
        <switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </switch>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
