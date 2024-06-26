import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        capacity: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://formspree.io/f/xleqkoqn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            setFormData({
                name: "",
                email: "",
                capacity: "",
                message: ""
            });
            alert("Your message has been sent successfully!");
        } else {
            alert("There was an issue sending your message. Please try again.");
        }
    };

    return (
        <>
            <main className="p-4 text-center bg-gray-50">
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-normal mb-6">We would love to hear from you</h1>
                        <p className="text-lg mb-12">If you have any questions or need further information, feel free to contact us.</p>
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white p-8 rounded-lg shadow-lg space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-left mb-2">Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-4 border border-gray-300 rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-left mb-2">Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-4 border border-gray-300 rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-left mb-2">Capacity:</label>
                                    <input
                                        type="text"
                                        name="capacity"
                                        value={formData.capacity}
                                        onChange={handleChange}
                                        className="w-full p-4 border border-gray-300 rounded"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-left mb-2">Message:</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-4 border border-gray-300 rounded"
                                    rows="5"
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Contact;
