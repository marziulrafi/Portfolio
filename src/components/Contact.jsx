import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-[#0F172A]  text-white">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="space-y-4 text-gray-300">
            <p><strong>Email:</strong> marziulrafi@gmail.com</p>
            <p><strong>Phone:</strong> +8801925355520</p>
            <p><strong>WhatsApp:</strong> +8801925355520</p>
            <p>Feel free to reach out to me for project inquiries, collaboration, or just to say hello!</p>
          </div>

          <ContactForm />

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;