/* eslint-disable no-unused-vars */
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import contact from './Contact';
import navBar from './NavBar';
import card from './Card';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <navBar />
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