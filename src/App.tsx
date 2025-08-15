import { useState, useEffect, type JSX } from "react";
import {
  Menu,
  X,
  Code,
  Brain,
  Database,
  Users,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Award,
  Sparkles,
  ChevronUp,
} from "lucide-react";

export default function App(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "AI Solutions",
      description:
        "Revolutionary AI and machine learning solutions tailored to your business needs, from intelligent automation to predictive analytics that drive growth.",
      features: [
        "Machine Learning",
        "Predictive Analytics",
        "Process Automation",
        "AI Consulting",
      ],
    },
    {
      icon: <Database className="w-12 h-12 text-emerald-500" />,
      title: "Management Information Systems",
      description:
        "Comprehensive MIS solutions that streamline operations, enhance decision-making, and boost organizational efficiency through data-driven insights.",
      features: [
        "Real-time Analytics",
        "Custom Dashboards",
        "Data Integration",
        "Performance Metrics",
      ],
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: "Software Development",
      description:
        "Full-stack development services creating robust, scalable applications using cutting-edge technologies and modern development practices.",
      features: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "Cloud Solutions",
      ],
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Consulting Services",
      description:
        "Expert guidance on technology strategy, digital transformation, and system optimization to accelerate your business growth.",
      features: [
        "Digital Strategy",
        "System Architecture",
        "Process Optimization",
        "Technical Training",
      ],
    },
  ];

  const features = [
    { icon: <Zap className="w-6 h-6" />, text: "Lightning-Fast Development" },
    { icon: <Shield className="w-6 h-6" />, text: "Enterprise-Grade Security" },
    { icon: <Award className="w-6 h-6" />, text: "Award-Winning Solutions" },
    { icon: <Sparkles className="w-6 h-6" />, text: "Cutting-Edge Technology" },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "24/7 Support & Maintenance",
    },
    { icon: <Star className="w-6 h-6" />, text: "Premium Quality Assurance" },
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered", color: "text-blue-600" },
    { number: "8+", label: "Years Excellence", color: "text-emerald-600" },
    { number: "95%", label: "Client Satisfaction", color: "text-purple-600" },
    { number: "50+", label: "Happy Clients", color: "text-orange-600" },
  ];

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSubmit = () => {
    // placeholder for real submit logic
    alert("Thank you for your interest! We will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/95 backdrop-blur-md shadow-xl"
            : "bg-white/90 backdrop-blur-sm shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Core Mentor
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button
                onClick={(e) => handleNavClick(e, "contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Quote
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-2xl">
            <div className="px-4 py-6 space-y-3">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={(e) => handleNavClick(e, "contact")}
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main>
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-8 animate-bounce">
                🚀 Transforming Businesses with AI & Technology
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Empowering Business Through
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                Smart Technology
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Core Mentor delivers cutting-edge software solutions, AI
              implementations, and comprehensive Management Information Systems
              to transform your business operations and accelerate growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={(e) => handleNavClick(e, "contact")}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button
                onClick={(e) => handleNavClick(e, "services")}
                className="group border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transform hover:-translate-y-2 transition-all duration-300"
              >
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                Our Services
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Technology Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We provide end-to-end technology solutions designed to
                accelerate your business growth, improve efficiency, and drive
                digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 hover:border-blue-200"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-500"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                  Why Choose Core Mentor?
                </h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  We combine deep technical expertise with business acumen to
                  deliver solutions that drive real results and sustainable
                  growth for our clients.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center group hover:bg-white p-3 rounded-xl transition-all duration-300"
                    >
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <span className="text-gray-700 font-medium">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-10 text-white shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div className="absolute top-6 right-6">
                    <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                    Let's discuss how our expertise in AI, software development,
                    and MIS can accelerate your digital transformation journey
                    and drive unprecedented growth.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                      <span className="text-blue-100">
                        Free consultation & strategy session
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                      <span className="text-blue-100">
                        Custom solution roadmap
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                      <span className="text-blue-100">
                        ROI-focused implementation
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleNavClick(e, "contact")}
                    className="w-full bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    Schedule Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Meet Core Mentor
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We are a team of passionate technologists, AI specialists, and
                business strategists dedicated to helping organizations harness
                the power of technology to achieve extraordinary results and
                sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    <div
                      className={`text-5xl font-bold ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-lg font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Innovation First
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We stay ahead of technology trends, ensuring our clients
                  benefit from the latest innovations in AI, cloud computing,
                  and digital transformation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Client-Centric
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every solution is tailored to our clients' unique needs,
                  ensuring maximum ROI and long-term success through
                  personalized service.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Excellence Driven
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain the highest standards of quality, security, and
                  performance in every project we deliver, exceeding
                  expectations consistently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-24 bg-gray-900 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium mb-4">
                Get In Touch
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Let's Start Your Digital Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business? Let's discuss how we can help
                you achieve your goals with cutting-edge technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Email Us</h4>
                      <a
                        href="mailto:contact@corementor.com"
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg"
                      >
                        contact@corementor.io
                      </a>
                      <p className="text-gray-400 mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Call Us</h4>
                      <a
                        href="tel:+15551234567"
                        className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-lg"
                      >
                        +250 780 905 792
                      </a>
                      <p className="text-gray-400 mt-1">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Visit Us</h4>
                      <p className="text-gray-300 text-lg">
                        Norken Kigali, Rwanda
                      </p>
                      <p className="text-gray-400 mt-1">Schedule a meeting</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-3 text-gray-200">
                        First Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-3 text-gray-200">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-200">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john.doe@example.com"
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-200">
                      Project Type
                    </label>
                    <select className="w-full px-6 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300">
                      <option value="">Select a service</option>
                      <option value="ai">AI Solutions</option>
                      <option value="mis">
                        Management Information Systems
                      </option>
                      <option value="development">Software Development</option>
                      <option value="consulting">Consulting Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-200">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project goals, timeline, and requirements..."
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 resize-vertical placeholder-gray-400"
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center group"
                  >
                    Send Message
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Core Mentor
                </span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
                Empowering businesses through smart technology, innovative AI
                solutions, and comprehensive digital transformation services.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors duration-300 cursor-pointer">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300 cursor-pointer">
                  <span className="text-white font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "Services", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={(e) => handleNavClick(e, item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    AI Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Software Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    MIS Systems
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Core Mentor. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
