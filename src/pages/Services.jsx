import React, { useEffect } from "react";
import { Briefcase, Shield, ChartColumn, PenTool } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
// Inject keyframes & utility CSS
const styleSheet = document.createElement("style");
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
`;

document.head.appendChild(styleSheet);

export default function Services() {

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <ScrollAnimation />
      <Navbar />

{/* 4. Contact Banner WITH BUBBLES */}
      <div className="bg-primary text-white relative overflow-hidden">
        {/* Floating bubbles */}
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
              Our Services
            </h1>
            <div
              className="w-24 h-1 bg-white mx-auto mb-8 rounded-full animate-on-scroll"
              data-animation="fadeInUp"
            ></div>
            <p
              className="text-lg md:text-xl mb-8 animate-on-scroll"
              data-animation="fadeInUp"
            >
              Comprehensive technical solutions tailored to your business needs with precision and expertise.
            </p>
          </div>
        </div>
      </div>

      {/* Core Services Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl text-center font-bold text-text mb-12 animate-on-scroll"
            data-animation="fadeInUp"
          >
            Our Core Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1 */}
            <div
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-on-scroll"
              data-animation="fadeInLeft"
            >
              <div className="flex items-center justify-start mb-6">
                <div className="bg-secondary rounded-full p-4 shadow-md">
                  <Briefcase className="text-text" size={40} />
                </div>
                <h3 className="text-2xl font-semibold text-text ml-4">
                  Project Management
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We deliver end-to-end project management focusing on risk-informed planning and controlled delivery.
                From early requirements and investment case development to change management and adoption, we embed AIRisk’s
                data-driven insights to improve stakeholder alignment, reduce uncertainty, and drive measurable delivery outcomes.
              </p>
            </div>

            {/* Box 2 */}
            <div
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-on-scroll"
              data-animation="fadeInRight"
            >
              <div className="flex items-center justify-start mb-6">
                <div className="bg-secondary rounded-full p-4 shadow-md">
                  <PenTool className="text-text" size={40} />
                </div>
                <h3 className="text-2xl font-semibold text-text ml-4">
                  Architecture Services
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We design scalable, insight-rich architectures that support explainable AI, seamless system integration,
                and cloud readiness. From concept to deployment, our solutions enable AIRisk to fit confidently within enterprise
                ecosystems—optimised for agility, trust, and alignment with strategic objectives. </p>
            </div>

            {/* Box 3 */}
            <div
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-on-scroll"
              data-animation="fadeInLeft"
            >
              <div className="flex items-center justify-start mb-6">
                <div className="bg-secondary rounded-full p-4 shadow-md">
                  <Shield className="text-text" size={40} />
                </div>
                <h3 className="text-2xl font-semibold text-text ml-4">
                  Risk & Security Analysis
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our risk practice combines governance, compliance, and foresight to help organisations proactively identify,
                quantify, and treat technology and delivery risks. Using AIRisk as a foundation, we support master risk frameworks,
                control design, and risk-based decision-making at both project and portfolio levels.

              </p>
            </div>

            {/* Box 4 */}
            <div
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-on-scroll"
              data-animation="fadeInRight"
            >
              <div className="flex items-center justify-start mb-6">
                <div className="bg-secondary rounded-full p-4 shadow-md">
                  <ChartColumn className="text-text" size={40} />
                </div>
                <h3 className="text-2xl font-semibold text-text ml-4">
                  Business Analysis
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We bridge strategy and execution through clear, structured analysis rooted in public-sector delivery needs.

                From scoping requirements and mapping current-state risks to shaping data-informed user stories and value streams,

                we ensure AIRisk implementations are grounded in real-world insights and aligned to stakeholder priorities.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Scroll animation hook
function ScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationType = entry.target.dataset.animation || "fadeInUp";
            entry.target.classList.add(`animate-${animationType}`);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}