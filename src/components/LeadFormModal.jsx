import React, { useState } from "react";

const LeadFormModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        organisation: "",
        query: "",
    });

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResult("Sending...");

        try {
            const form = new FormData();
            form.append("access_key", "061dbcd5-2672-4821-a747-820c72257632"); // Replace with your Web3Forms key
            form.append("name", formData.name);
            form.append("email", formData.email);
            form.append("mobile", formData.mobile);
            form.append("organisation", formData.organisation);
            form.append("query", formData.query);

            // ✅ Add custom subject here
            form.append("subject", `Free Consultation Request from ${formData.name}`);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: form,
            });

            const data = await response.json();
            if (data.success) {
                setResult("Form submitted successfully!");
                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    organisation: "",
                    query: "",
                });
                onClose();
            } else {
                console.error("Error", data);
                setResult("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setResult("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg w-96 text-white">
                <h2 className="text-2xl font-bold mb-4">Get a Free Consultation</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={loading}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={loading}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Mobile Number</label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            disabled={loading}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                            placeholder="Your Mobile Number"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Organisation</label>
                        <input
                            type="text"
                            name="organisation"
                            value={formData.organisation}
                            onChange={handleChange}
                            disabled={loading}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                            placeholder="Your Organisation"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Query</label>
                        <textarea
                            name="query"
                            value={formData.query}
                            onChange={handleChange}
                            disabled={loading}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                            placeholder="Your Query"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="text-sm text-green-400 mb-4">{result}</div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-red-500 px-4 py-2 rounded mr-2"
                            onClick={onClose}
                            disabled={loading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`bg-blue-600 px-4 py-2 rounded flex items-center justify-center ${
                                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
                            }`}
                        >
                            {loading ? (
                                <>
                                    <svg
                                        className="animate-spin h-5 w-5 mr-2 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        ></path>
                                    </svg>
                                    Processing...
                                </>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LeadFormModal;

