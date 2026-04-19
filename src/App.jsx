import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Fun from './pages/Fun';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "./pages/Navbar.jsx";

// --- Main App ---

export default function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    })
    return (
        <>
            <Navbar />
            <main className="bg-gray-800">

                <section id="home"><Home /></section>
                <section id="skills"><Skills /></section>
                <section id="projects"><Project /></section>
                <section id="contact"><Contact /></section>
                <section id="fun"><Fun /></section>

            </main>

        </>

    )
}
