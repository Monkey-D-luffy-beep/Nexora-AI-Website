import React from "react";
import logo from "./assets/logo.png";
import { motion } from "framer-motion";

export default function App() {
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

      {/* Verticals */}
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

      {/* About & Contact Section */}
      <section
        id="contact"
        className="relative px-6 py-24 max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/30 relative overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-100/40 to-cyan-100/40 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">About Us</h2>
              </div>
              
              <div className="space-y-5 text-gray-600 mb-8">
                <p className="text-lg leading-relaxed font-light">
                  We are a small team of dedicated people trying to solve business challenges based out of Delhi, India.
                </p>
                <p className="text-lg leading-relaxed font-light">
                  Our passion lies in transforming complex business problems into simple, AI-driven solutions that drive real growth.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  Get in Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group cursor-pointer hover:bg-white/50 p-3 rounded-xl transition-all duration-300">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2.5 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Email</p>
                      <p className="text-gray-800 font-semibold">saurav.chaudhary70@gmail.com</p>
                    </div>
                  </div>

                  <a 
                    href="https://www.linkedin.com/company/nexoraaii/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group cursor-pointer hover:bg-white/50 p-3 rounded-xl transition-all duration-300"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2.5 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">LinkedIn</p>
                      <p className="text-gray-800 font-semibold group-hover:text-blue-600 transition-colors duration-300">@nexoraaii</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 group p-3 rounded-xl">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-2.5 rounded-full">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Location</p>
                      <p className="text-gray-800 font-semibold">Delhi, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-8">Let's discuss how we can help transform your business</p>
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We'll reach out soon 🚀");
              }}
              className="grid gap-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    required
                  />
                </div>
              </div>
              <textarea
                placeholder="How can we help?"
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                rows="5"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
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