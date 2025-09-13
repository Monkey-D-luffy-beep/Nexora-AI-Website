
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser'; // Add this import

export default function App() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Make sure you have these environment variables set up
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      alert("✅ Thanks! We'll reach out soon 🚀");
      formRef.current.reset();
      
    } catch (error) {
      console.error('Email sending failed:', error);
      alert("❌ Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="relative backdrop-blur-md bg-white/80 border-b border-white/20 shadow-xl">
        <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Nexora AI
            </h1>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#contact"
            className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          ></motion.div>
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          ></motion.div>
          <motion.div
            animate={{ 
              y: [-10, 10, -10]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-lg"
          ></motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
            Data. AI. Growth.
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-12 leading-relaxed"
          >
            Nexora AI helps businesses unlock growth with{" "}
            <span className="font-semibold text-blue-600">AI automation</span>,{" "}
            <span className="font-semibold text-purple-600">analytics</span>, and{" "}
            <span className="font-semibold text-indigo-600">lead intelligence</span>.  
            We find real problems and deliver tailored solutions.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            href="#contact"
            className="inline-block group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <span className="relative z-10">Book a Free Call</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>

        {/* Hero Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 relative"
        >
          <div className="relative w-full max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center"
              alt="AI Analytics Dashboard"
              className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section className="relative px-8 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive AI solutions tailored to your business needs</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Automation",
              description: "Automate repetitive workflows and free up time for high-impact work.",
              image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
              gradient: "from-blue-500 to-cyan-500",
              delay: 0.1
            },
            {
              title: "Analytics",
              description: "Real-time dashboards and insights to drive smarter decisions.",
              image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=400&h=300&fit=crop&crop=center",
              gradient: "from-purple-500 to-pink-500",
              delay: 0.3
            },
            {
              title: "Lead Intelligence",
              description: "Discover the right customers and partners with data-driven targeting.",
              image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop&crop=center",
              gradient: "from-indigo-500 to-blue-500",
              delay: 0.5
            }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
              className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-3xl`}></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white text-center py-24 px-8 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-xl"
          ></motion.div>
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-xl"
          ></motion.div>
        </div>

        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            Ready to Talk?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90"
          >
            Schedule a short call to explore how Nexora can help your business grow.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            href="#contact"
            className="inline-block group relative bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <span className="relative z-10">Schedule a Call</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
        </div>
      </motion.section>

      {/* About Us & Contact Section - Side by Side */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* About Us */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">About Us</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-600">
                We are a small team of dedicated people trying to solve business challenges
                based out of Delhi, India.
              </p>
              <p className="text-lg leading-relaxed mb-10 text-gray-600">
                Our passion lies in transforming complex business problems into simple,
                AI-driven solutions that drive real growth.
              </p>

              <div className="space-y-4 text-lg">
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">Email:</span>
                  <a
                    href="mailto:saurav.chaudhary70@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    sales@nexoraai.in
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">LinkedIn:</span>
                  <a
                    href="https://linkedin.com/in/nexoraaii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    @nexoraaii
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">Location:</span>
                  <span className="text-gray-600">Delhi, India</span>
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-4xl font-bold mb-8 text-gray-900">Contact Us</h2>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-left font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-left font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-left font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-center py-8 text-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm">
            © {new Date().getFullYear()} Nexora AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
