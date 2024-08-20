import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footeer/Footer'
import Main from "./containers/Main/Main";
import Contacts from "./containers/Contacts/Contacts";
import Sales from "./containers/Sales/Sales";
import Rules from "./containers/Rules/Rules";
import AboutUs from "./containers/AboutUs/AboutUs";

export default function Routers() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="*" element={<div>Page not found</div>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
