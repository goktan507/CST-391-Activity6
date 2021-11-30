import React from "react";
import AboutThisSite from './AboutThisSite';
import ContactUs from './ContactUs';
import LoginPage from './LoginPage';
import User from './User.js';
import { BrowserRouter, Route, Link, Navigate, Routes } from "react-router-dom";
import Navbar from './Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component {

    state = { isLoggedIn: false };

    handleLogin = (status) => {
        this.setState({ isLoggedIn: status }, () => {
            console.log("App says login status =", this.state.isLoggedIn);
        });
    }

    render() {
        return (
            <BrowserRouter>
                <Navbar />
                {this.state.isLoggedIn ? <span>You are are logged in</span> : <span>Not logged in</span>}
                <Routes>
                    <Route path="/about" element={<AboutThisSite/>} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/login" element={<LoginPage onClick={this.handleLogin} />} />
                    <Route path="/user/:username" element={<User/>} />
                </Routes>
                <h5>Some friends of mine</h5>
                <ul>
                    <li><Link to="/user/Lucious">Lucious</Link></li>
                    <li><Link to="/user/Barnabas">Barnabas</Link></li>
                    <li><Link to="/user/Grover">Grover</Link></li>
                    <li><Link to="/user/Joplin">Joplin</Link></li>
                </ul>

            </BrowserRouter>
        )
    }
}

export default App;