// src/pages/Work.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from "react";

const Work = () => {
    return (
        <>
            <main className="p-4 text-center">
                <h1 className="text-4xl font-bold my-8">Our Work</h1>
                <p className="text-lg">Here are some of the projects we've worked on...</p>
                {/* Add more content as needed */}
                <section className="my-8">
                    <h2 className="text-2xl font-bold">Projects</h2>
                    <ul className="list-disc list-inside">
                        <li>Project 1 - Description</li>
                        <li>Project 2 - Description</li>
                        <li>Project 3 - Description</li>
                    </ul>
                </section>
            </main>
        </>
    );
};

export default Work;
