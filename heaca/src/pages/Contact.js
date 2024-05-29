// src/pages/Contact.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from "react";

const Contact = () => {
    return (
        <>
            <Navbar />
            <main className="p-4 text-center">
                <h1 className="text-4xl font-bold my-8">Contact Us</h1>
                <p className="text-lg">Feel free to reach out to us at info@heaca.com...</p>
                {/* Add more content as needed */}
                <section className="my-8">
                    <h2 className="text-2xl font-bold">Get in Touch</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-left">Name:</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                            <label className="block text-left">Email:</label>
                            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                            <label className="block text-left">Message:</label>
                            <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
                        </div>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
                    </form>
                </section>
            </main>
        </>
    );
};

export default Contact;
