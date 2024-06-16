import React from "react";

const Contact = () => {
    return (
        <>
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
                            <button type="submit" className="w-full py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-600">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Contact;
