/* eslint-disable no-unused-vars */
//import logo from './logo.svg';
import './App.css';
import navBar from './index';
import card from './index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import contact from './Contact';

function App() {
    return (
        <div className="App">
     <Home></Home>
            <BrowserRouter>
                <navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/card" element={<card />}></Route>
                    <Route path="/contact" element={<contact />}></Route>
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;