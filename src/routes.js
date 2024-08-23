import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footeer/Footer';
import Main from "./containers/Main/Main";
import Contacts from "./containers/Contacts/Contacts";
import Sales from "./containers/Sales/Sales";
import Rules from "./containers/Rules/Rules";
import AboutUs from "./containers/AboutUs/AboutUs";
import { motion } from "framer-motion";

export default function Routers() {
    return (
        <BrowserRouter>
            <Header />
            <motion.div layout >
                <Routes>
                    <Route path="/" element={<motion.div layout><Main /></motion.div>} />
                    <Route path="/contacts" element={<motion.div layout><Contacts /></motion.div>} />
                    <Route path="/sales" element={<motion.div layout><Sales /></motion.div>} />
                    <Route path="/rules" element={<motion.div layout><Rules /></motion.div>} />
                    <Route path="/aboutUs" element={<motion.div layout><AboutUs /></motion.div>} />
                    <Route path="*" element={<motion.div layout><div>Page not found</div></motion.div>} />
                </Routes>
            </motion.div>
            <Footer />
        </BrowserRouter>
    );
}
