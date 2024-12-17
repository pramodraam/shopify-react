import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import ProductPage from './pages/ProductPage';

import NavBar from './Components/NavBar';

import Cart from './Components/Cart';
import NavMenu from './Components/NavMenu';

import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <NavMenu />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
