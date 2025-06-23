import React, { useState, useEffect } from "react"
import { CheckCircle, XCircle } from "lucide-react"
import Navbar from "../components/Navbar"
import emailjs from "@emailjs/browser"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

const styleSheet = document.createElement("style")
styleSheet.textContent = `
  @keyframes slideUp {
    from { transform: translateY(100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes slideUpOut {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-100%); opacity: 0; }
  }

  @keyframes fadeInUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes fadeInLeft {
    from { transform: translateX(-30px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes fadeInRight {
    from { transform: translateX(30px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  .animate-on-scroll {
    opacity: 0;
  }

  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease forwards;
  }

  .animate-fadeInLeft {
    animation: fadeInLeft 0.8s ease forwards;
  }

  .animate-fadeInRight {
    animation: fadeInRight 0.8s ease forwards;
  }

  @keyframes floatUp {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0.4;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      transform: translateY(-200vh) scale(1.5);
      opacity: 0;
    }
  }

  .bubble {
    position: absolute;
    bottom: -50px;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    opacity: 0.6;
    animation: floatUp linear infinite;
    pointer-events: none;
  }

  .bubble-1 { left: 10%; width: 20px; height: 20px; animation-duration: 15s; }
  .bubble-2 { left: 25%; width: 35px; height: 35px; animation-duration: 18s; }
  .bubble-3 { left: 40%; width: 15px; height: 15px; animation-duration: 12s; }
  .bubble-4 { left: 55%; width: 30px; height: 30px; animation-duration: 20s; }
  .bubble-5 { left: 70%; width: 25px; height: 25px; animation-duration: 16s; }
  .bubble-6 { left: 85%; width: 40px; height: 40px; animation-duration: 22s; }

  .error-message {
    background-color: #FEE2E2;
    border: 1px solid #FCA5A5;
    color: #B91C1C;
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
`
document.head.appendChild(styleSheet)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [sendError, setSendError] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true)
    setSendError(false)

    const serviceID = "service_szdcq4g"
    const templateID = "template_o1lt0jp"
    const publicKey = "trrGwiE-BtNbTYpfR"

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setFormSubmitted(true)
        setIsSending(false)
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            subject: "",
            message: "",
          })
          setFormSubmitted(false)
        }, 5000)
      })
      .catch((error) => {
        console.error("EmailJS Error:", error)
        setIsSending(false)
        setSendError(true)
      })
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <ScrollAnimation />
      <Navbar />

      <div className="bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <span className="bubble bubble-1"></span>
          <span className="bubble bubble-2"></span>
          <span className="bubble bubble-3"></span>
          <span className="bubble bubble-4"></span>
          <span className="bubble bubble-5"></span>
          <span className="bubble bubble-6"></span>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-3xl md:text-5xl font-bold mb-4 animate-on-scroll"
              data-animation="fadeInLeft"
            >
              Get in Touch
            </h1>
            <div
              className="w-24 h-1 bg-white mx-auto mb-8 rounded-full animate-on-scroll"
              data-animation="fadeInUp"
            ></div>
            <p
              className="text-lg md:text-xl mb-8 animate-on-scroll"
              data-animation="fadeInUp"
            >
              We're here to help! Reach out to our team for inquiries about our services,
              partnerships, or career opportunities.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto animate-on-scroll"
            data-animation="fadeInUp"
          >
            <h2 className="text-3xl text-center font-bold text-text mb-12">
              Send Us a Message
            </h2>

            {sendError && (
              <div className="error-message">
                <XCircle size={24} />
                <span>Failed to send. Please try again.</span>
              </div>
            )}

            {formSubmitted ? (
              <div className="bg-green-100 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                <CheckCircle size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p>
                  Your message has been sent successfully. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="name">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="email">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="company">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="subject">
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">* Required fields</p>
                    <button
                      type="submit"
                      disabled={isSending}
                      className={`font-bold py-3 px-8 rounded-lg transition duration-300 ${
                        isSending
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : "bg-primary text-white hover:bg-purple-900"
                      }`}
                    >
                      {isSending ? "Sending…" : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationType = entry.target.dataset.animation || "fadeInUp"
            entry.target.classList.add(`animate-${animationType}`)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return null
}
