import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import AIRiskLogo from "../assets/AIRisk.png";
import benefitsImages from "../assets/images/Benefits";

// Add extra keyframes for scroll-triggered animations
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
  transform: translateY(20px);
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

const benefitsData = [
  {
    title: "Project Delivery & Governance",
    subheading: "From business case to go-live",
    description:
      "We help organisations plan and deliver technology and data projects with clear scope, structured governance, and risk-informed decision making across the lifecycle.",
    image: benefitsImages.Portfolio,
    alt: "Project Delivery & Governance",
    animation: "fadeInLeft",
  },
  {
    title: "Architecture & Solution Design",
    subheading: "Practical, scalable architectures",
    description:
      "We design application, data, and integration architectures that are secure, explainable, and aligned with your enterprise and cloud strategy.",
    image: benefitsImages.Maturity,
    alt: "Architecture & Solution Design",
    animation: "fadeInUp",
  },
  {
    title: "Risk, Security & Governance Advisory",
    subheading: "Stronger risk practices and controls",
    description:
      "We review and uplift project and portfolio risk practices, improve visibility for executives, and support the design of controls and governance frameworks.",
    image: benefitsImages.Security,
    alt: "Risk, Security & Governance Advisory",
    animation: "fadeInRight",
  },
  {
    title: "Business Analysis & Change Support",
    subheading: "Connecting strategy to delivery",
    description:
      "We translate strategy into requirements, user stories, and change plans grounded in real-world delivery constraints and stakeholder needs.",
    image: benefitsImages.Learning,
    alt: "Business Analysis & Change Support",
    animation: "fadeInLeft",
  },
];

export default function PexcelSolutionsWebsite() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <ScrollAnimation />
      <Navbar />

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

        <div className="max-w-5xl mx-auto px-4 py-10 md:py-10 text-white relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Main hero text – Pexcel-first */}
            <div
              className="text-center md:text-left max-w-2xl animate-on-scroll"
              data-animation="fadeInLeft"
            >
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
                Better Projects. Better Risk Management. Better Results.
              </h1>
              <p className="text-sm sm:text-base text-white/90 mb-6 leading-relaxed">
                We help organisations modernise delivery, strengthen governance,
                and improve risk visibility through practical consulting,
                structured planning, and evidence-based decision making.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <button
                  onClick={() => navigate("/services")}
                  className="bg-secondary text-text font-bold py-2 px-5 rounded-lg 
                  border-2 border-transparent 
                  hover:bg-primary hover:text-white hover:border-white
                  hover:scale-105 hover:shadow-lg 
                  transition duration-300"
                >
                  Explore Our Services
                </button>
                {/* <button
                  onClick={() => navigate("/airisk")}
                  className="bg-transparent text-white font-bold py-2 px-5 rounded-lg 
                  border-2 border-white/70 
                  hover:bg-white hover:text-primary
                  hover:scale-105 hover:shadow-lg 
                  transition duration-300"
                >
                  Learn About AIRisk
                </button> */}
              </div>
            </div>

            {/* Innovation Spotlight – AIRisk */}
            <div className="w-64 sm:w-72 md:w-80 flex justify-center">
              <div
                className="bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-md shadow-lg 
                           animate-on-scroll"
                data-animation="fadeInRight"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={AIRiskLogo}
                    alt="AIRisk Logo"
                    className="w-28 h-auto object-contain mb-3"
                  />
                  <h3 className="text-lg font-semibold mb-1">
                    Innovation Spotlight: AIRisk
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 mb-2">
                    An AI-assisted risk model developed by Pexcel to support
                    smarter project and portfolio risk identification with
                    project managers always staying in control.
                  </p>
                  <button
                    onClick={() => navigate("/airisk")}
                    className="mt-2 text-xs font-semibold underline decoration-white/70 hover:decoration-white"
                  >
                    Find out how it works
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How we help / Services Section */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl text-center font-bold text-text mb-8 animate-on-scroll"
            data-animation="fadeInUp"
          >
            How We Help
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-items-center gap-8">
            {benefitsData.map((solution, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-5 transition-all duration-700 ease-out w-full"
                data-animation={solution.animation}
              >
                <div
                  className="w-full bg-white rounded-2xl shadow-xl
                             hover:shadow-2xl hover:border-primary hover:border-3
                             hover:scale-105 focus-visible:scale-105
                             transform cursor-pointer px-6 py-10
                             flex flex-col transition-all duration-300
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  tabIndex={0}
                >
                  <div className="flex items-center gap-6 mb-6">
                    <img
                      src={solution.image}
                      alt={solution.alt}
                      className="w-24 h-24 object-cover shadow-sm rounded-lg"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold text-text leading-tight">
                        {solution.title}
                      </h3>
                      <h4 className="mt-1 text-base font-medium text-gray-600">
                        {solution.subheading}
                      </h4>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-900 text-base leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const animationType = entry.target.dataset.animation || "fadeInUp";
          const className = `animate-${animationType}`;

          if (entry.isIntersecting) {
            // Add the animation class when it comes into view
            entry.target.classList.add(className);
          } else {
            // Remove the animation class when it leaves view,
            // so it can be re-added next time it scrolls back in
            entry.target.classList.remove(className);
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
