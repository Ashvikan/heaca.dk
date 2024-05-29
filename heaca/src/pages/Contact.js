import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from "react";

const Contact = () => {
    return (
        <>
            <Navbar />
            <main className="p-4 text-center bg-gray-50">
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold mb-6">We would love to hear from you</h1>
                        <p className="text-lg mb-12">If you have any questions or need further information, feel free to contact us.</p>
                        <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-left mb-2">Name:</label>
                                    <input type="text" className="w-full p-4 border border-gray-300 rounded" />
                                </div>
                                <div>
                                    <label className="block text-left mb-2">Email:</label>
                                    <input type="email" className="w-full p-4 border border-gray-300 rounded" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-left mb-2">Message:</label>
                                <textarea className="w-full p-4 border border-gray-300 rounded" rows="5"></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <h2 className="text-2xl font-bold">Let’s change the world together</h2>
                            <p className="text-gray-400">Feel free to contact us at info@heaca.com or use our contact form.</p>
                        </div>
                        <div className="text-center md:text-right">
                            <h2 className="text-2xl font-bold mb-2">Wanna join the team?</h2>
                            <p className="text-gray-400">See open positions and much more <a href="#" className="text-red-500 underline">here</a>.</p>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-8 text-gray-400 text-center md:text-left">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <h3 className="text-lg font-bold">Press</h3>
                                <ul>
                                    <li><a href="#" className="hover:underline">News</a></li>
                                    <li><a href="#" className="hover:underline">Blog</a></li>
                                    <li><a href="#" className="hover:underline">Events</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Company</h3>
                                <ul>
                                    <li><a href="#" className="hover:underline">Academy</a></li>
                                    <li><a href="#" className="hover:underline">ESG</a></li>
                                    <li><a href="#" className="hover:underline">Conferences</a></li>
                                    <li><a href="#" className="hover:underline">Partners</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Legal</h3>
                                <ul>
                                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                    <li><a href="#" className="hover:underline">Whistleblower</a></li>
                                    <li><a href="#" className="hover:underline">Investors</a></li>
                                    <li><a href="#" className="hover:underline">Download Logo</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Contact;
