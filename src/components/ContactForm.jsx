import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const loadingToast = toast.loading("Sending your message...");

        try {
            const res = await fetch("https://formspree.io/f/xjkrjaak", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                toast.success("Message sent successfully!", { id: loadingToast });
                setFormData({ name: "", email: "", message: "" });
            } else {
                toast.error("Something went wrong. Try again.", { id: loadingToast });
            }
        } catch (err) {
            toast.error("Error sending message. Please try again.", { id: loadingToast });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-[#1E293B] text-white border border-gray-600 focus:outline-blue-400"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded bg-[#1E293B] text-white border border-gray-600 focus:outline-blue-400"
            />
            <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded bg-[#1E293B] text-white border border-gray-600 focus:outline-blue-400"
            ></textarea>
            <button
                type="submit"
                className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
