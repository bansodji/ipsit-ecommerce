import React, {useEffect }  from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import Footer from './components/Footer';
import User from './pages/User';
import Shop from './pages/Shop';
import Category from './pages/Category';
import ErrorPage from './pages/ErrorPage';
import TrendingPage from './pages/TrendingPage';
import SingleProduct from './pages/SingleProduct';
import SearchPage from './pages/SearchPage';

function App() {
  const light = {
    colors: {
      theme1: "#6155f5",
      theme1a: "#b5b1f6",
      theme1b: "#ddd6fe",
      theme1c: "#ede9fe",
      light: "#f6f8fa",
      grey: "#b2bec3",
      lightBorder: "#e2e8f0",
      footer: "#071531",
      gold: "#eab308",
    },
    other: {
      boxShadow: "0px 0px 3.6px rgba(0, 0, 0, 0.017),0px 0px 10px rgba(0, 0, 0, 0.025),0px 0px 24.1px rgba(0, 0, 0, 0.033),0px 0px 80px rgba(0, 0, 0, 0.05)",
      transitionFast: "300ms",
      transitionMed: "600ms",
      transitionSlow: "1s",
    },
    screen: {
      lg: "992px",
      md: "768px",
      sm: "576px",
    }
  }

  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when navigating to a new route
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Header />      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/shop" element={<Shop/>} />
        <Route exact path="/category" element={<Category/>} />
        <Route exact path="/trend" element={<TrendingPage/>} />
        <Route exact path="/user" element={<User/>} />
        <Route exact path="/product" element={<SingleProduct/>} />
        <Route exact path="/search" element={<SearchPage/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
