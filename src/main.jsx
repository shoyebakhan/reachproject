import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navbar from "./componant/jsx/Navbar";
import Hero from "./componant/jsx/Hero";
import Card from "./componant/jsx/Card";
import Seclast from "./componant/jsx/Seclast";
import Footer from './componant/jsx/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Navbar />
    <Hero />
    <Card />
    <Seclast />
    <Footer />
    </>
)
