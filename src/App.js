import React from 'react' 
import { ThemeProvider } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/pages/MainPage'; 
import MintPage from './components/pages/MintPage';
import './App.css';
import { HotCollections } from './components/pages/HotCollection/HotCollections'; 
import { TopSeller } from './components/pages/TopSellers/TopSeller';
 
function App() {
  return (
    <ThemeProvider>
      <div className="App">
          <Navbar />
          <MainPage/>
          <MintPage />
          <HotCollections />
          <TopSeller />
      </div>
    </ThemeProvider>
  );
}

export default App;
