import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import store from './redux/configureStore';
import NavBar from './components/NavBar';
import Home from './components/books/Home';
import Categories from './components/categories/Categories';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
