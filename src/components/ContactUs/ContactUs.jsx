import React, { useRef, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaPaperPlane,
    FaSpinner,
    FaFacebook,
} from "react-icons/fa";
import contactAnimation from "../../assets/contact-us.json";
import Lottie from "lottie-react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: null,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: null });

        try {
            const response = await axios.post(
                "http://localhost:9000/api/contact",
                formData
            );

            if (response.data.success) {
                setStatus({ submitting: false, success: true, error: null });
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(
                    () => setStatus({ ...status, success: false }),
                    3000
                );
            }
        } catch (error) {
            setStatus({
                submitting: false,
                success: false,
                error: error.response?.data?.error || "Failed to send message",
            });
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                {/* Animated Header */}
                <motion.div
                    className="flex flex-col items-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <motion.h2
                            className="text-5xl font-bold bg-gradient-to-r from-[#07a698] to-[#0d8a7e] bg-clip-text text-transparent"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Contact Us
                        </motion.h2>
                        <motion.div
                            animate={{
                                rotate: [0, 10, -10, 0],
                                y: [0, -5, 5, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Lottie
                                className="w-24 h-24"
                                animationData={contactAnimation}
                                loop={true}
                            />
                        </motion.div>
                    </div>
                    <motion.p
                        className="text-center text-gray-600 text-lg max-w-2xl"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 0.3, duration: 0.8 },
                        }}
                    >
                        Have questions or want to work together? We'd love to
                        hear from you!
                    </motion.p>
                </motion.div>

                {/* Contact Content */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Contact Information - Animated List */}
                    <motion.div
                        className="bg-white p-8 rounded-2xl shadow-lg"
                        variants={itemVariants}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                            Get in Touch
                        </h3>

                        <motion.div className="space-y-6">
                            {[
                                {
                                    icon: (
                                        <FaPhone className="text-[#07a698] text-xl" />
                                    ),
                                    title: "Phone",
                                    text: "01540353043",
                                },
                                {
                                    icon: (
                                        <FaEnvelope className="text-[#07a698] text-xl" />
                                    ),
                                    title: "Email",
                                    text: "smhightech2025@gmail.com",
                                },
                                {
                                    icon: (
                                        <FaMapMarkerAlt className="text-[#07a698] text-xl" />
                                    ),
                                    title: "Address",
                                    text: "Joydebpur - Shimultoli Road, Near DUET , Joydebpur, Gazipur 1707",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4"
                                    whileHover={{ x: 5 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                    variants={itemVariants}
                                >
                                    <div className="bg-[#e6f7f5] p-3 rounded-full">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-500">
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="mt-8">
                            <h4 className="font-medium text-gray-700 mb-4">
                                Follow Us
                            </h4>
                            <div className="flex gap-4">
                                {[
                                    {
                                        icon: (
                                            <FaFacebook className="text-xl" />
                                        ),
                                        color: "hover:text-[#0077b5]",
                                        url: "https://www.facebook.com/profile.php?id=61573641314411",
                                        target:'blank'
                                    },
                                    {
                                        icon: (
                                            <FaFacebook className="text-xl" />
                                        ),
                                        color: "hover:text-[#0077b5]",
                                        url: "https://www.facebook.com/profile.php?id=61573641314411",
                                        target:'blank'
                                    },
                                   
                                    
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target={social.target}
                                        className={`bg-gray-100 p-3 rounded-full text-gray-700 ${social.color}`}
                                        whileHover={{
                                            y: -5,
                                            scale: 1.1,
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                            },
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden"
                        variants={itemVariants}
                    >
                        <AnimatePresence>
                            {status.success && (
                                <motion.div
                                    className="absolute inset-0 bg-[#07a698] bg-opacity-90 flex items-center justify-center z-10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <motion.div
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0.8 }}
                                        className="text-center p-6"
                                    >
                                        <motion.div
                                            animate={{
                                                y: [0, -10, 0],
                                                transition: {
                                                    repeat: Infinity,
                                                    duration: 2,
                                                },
                                            }}
                                        >
                                            <FaPaperPlane className="text-white text-5xl mx-auto mb-4" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            Message Sent!
                                        </h3>
                                        <p className="text-white opacity-90">
                                            We'll get back to you soon.
                                        </p>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                            Send Us a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    whileFocus={{ scale: 1.01 }}
                                >
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#07a698] focus:border-[#07a698] outline-none transition"
                                        required
                                    />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    whileFocus={{ scale: 1.01 }}
                                >
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#07a698] focus:border-[#07a698] outline-none transition"
                                        required
                                    />
                                </motion.div>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                whileFocus={{ scale: 1.01 }}
                            >
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#07a698] focus:border-[#07a698] outline-none transition"
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                whileFocus={{ scale: 1.01 }}
                            >
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#07a698] focus:border-[#07a698] outline-none transition"
                                    required
                                ></textarea>
                            </motion.div>

                            {status.error && (
                                <motion.div
                                    className="p-3 bg-red-100 text-red-700 rounded-lg"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {status.error}
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#07a698] to-[#0d8a7e] text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status.submitting}
                            >
                                {status.submitting ? (
                                    <motion.span
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        className="inline-block"
                                    >
                                        <FaSpinner />
                                    </motion.span>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactUs;
