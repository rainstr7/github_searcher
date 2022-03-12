import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { ProFile } from "./pages/ProFile";
import { Alert } from './components/Alert';
import { AlertState } from "./context/alert/AlertState";
import { GithubState } from "./context/github/GithubState";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <NavBar />
          <div className="container pt-4">
            <Alert alert={{ text: 'test' }} />
            <Routes>
              <Route path='/about' element={<About />} />
              <Route path='/profile/:urlName' element={<ProFile />} />
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
