import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import AIRiskLogo from "../assets/AIRisk.png"
import benefitsImages from '../assets/images/Benefits';
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
    title: "Executive Visibility & Portfolio Performance",
    subheading: "Elevated Risk Visibility for Better Portfolio Outcomes",
    description:
      "AIRisk gives executives a live view of project and program risks across the portfolio, enabling earlier interventions and data-backed decisions that improve delivery timelines, reduce surprises, and increase confidence in outcomes.",
    image: benefitsImages.Portfolio,
    alt: "Executive Visibility & Portfolio Performance",
    animation: "fadeInLeft",
  },
  {
    title: "AI Suggestions that Cut Across Silos",
    subheading: "Bias-Free, Pattern-Driven Risk Identification",
    description:
      "The AI engine scans across scope items, delivery teams, and user groups to surface potential risks — even the ones that don’t get raised in traditional workshops. It cuts through silos and cognitive blind spots to deliver a broader, smarter risk picture.",
    image: benefitsImages.Silos,
    alt: "AI Suggestions that Cut Across Silos",
    animation: "fadeInUp",
  },
  {
    title: "Reduce Manual Risk Management Overhead",
    subheading: "Less Admin, More Action",
    description:
      "AIRisk reduces time spent on workshops, historic registers, and escalation paperwork. Risk suggestions and treatments are generated automatically — letting PMs and executives focus on resolution, not documentation.",
    image: benefitsImages.Progress,
    alt: "Reduce Manual Risk Management Overhead",
    animation: "fadeInRight",
  },
  {
    title: "Maturity Uplift & Governance Alignment",
    subheading: "Boost Portfolio Maturity through AI-Driven Consistency",
    description:
      "By improving consistency in how risks are identified and responded to, AIRisk supports uplift of enterprise-wide risk management maturity. Automated reports and structured treatments help standardise compliance and strengthen governance frameworks.",
    image: benefitsImages.Maturity,
    alt: "Maturity Uplift & Governance Alignment",
    animation: "fadeInLeft",
  },
  {
    title: "Continuous Learning & Pattern Recognition",
    subheading: "Smarter Over Time",
    description:
      "AIRisk’s AI model learns continuously, refining its suggestions based on actual decisions and outcomes. It detects patterns across projects — enabling your organisation to spot recurring risks early and improve over time.",
    image: benefitsImages.Learning,
    alt: "Continuous Learning & Pattern Recognition",
    animation: "fadeInUp",
  },
  {
    title: "Secure, Scalable & No Vendor Lock-In",
    subheading: "Your Data, Your Control",
    description:
      "AIRisk is built for security and enterprise scale. It runs within your environment or on trusted cloud platforms, and your data stays yours — no vendor lock-in, no external dependencies.",
    image: benefitsImages.Security,
    alt: "Secure, Scalable & No Vendor Lock-In",
    animation: "fadeInRight",
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
            <div className="w-40 sm:w-48 md:w-52 min-[780px]:w-60 min-[900px]:w-64 flex justify-center">
              <img
                src={AIRiskLogo}
                alt="AIRisk Logo"
                className="w-full h-auto object-contain animate-on-scroll"
                data-animation="fadeInLeft"
              />
            </div>
            <div className="text-center md:text-left max-w-2xl">
              <h1
                className="text-3xl sm:text-4xl font-extrabold mb-2 animate-on-scroll"
                data-animation="fadeInRight"
              >
                AIRisk
              </h1>
              <h2
                className="text-xl sm:text-2xl font-semibold mb-4 text-highlight animate-on-scroll"
                data-animation="fadeInRight"
              >
                Smarter Project Risk Management
              </h2>
              <p
                className="text-sm sm:text-base text-white/90 mb-6 leading-relaxed animate-on-scroll"
                data-animation="fadeInRight"
              >
                AIRisk is an AI-assisted solution that transforms how
                organisations identify and manage project risks. It leverages
                data patterns and machine learning to improve delivery outcomes
                and governance.
              </p>
              <div
                className="flex justify-center md:justify-start animate-on-scroll"
                data-animation="fadeInUp"
              >
                <button
                  onClick={() => navigate("/services")}
                  className="bg-secondary text-text font-bold py-2 px-5 rounded-lg 
            border-2 border-transparent 
            hover:bg-primary hover:text-white hover:border-white
            hover:scale-105 hover:shadow-lg 
            transition duration-300"
                >
                  Discover Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key benefits Section */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl text-center font-bold text-text mb-8 animate-on-scroll"
            data-animation="fadeInUp"
          >
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
            {benefitsData.map((solution, index) => (
              <div
                key={index}
                className={`animate-on-scroll opacity-0 translate-y-5 transition-all duration-700 ease-out w-full bg-white rounded-2xl shadow-xl
                            hover:shadow-2xl hover:border-primary hover:border-3 hover:scale-105 transform cursor-pointer px-6 py-10
                            flex flex-col
                          `}
                data-animation={solution.animation}
              >
                <div className="flex items-center gap-6 mb-6">
                  <img
                    src={solution.image}
                    alt={solution.alt}
                    className="w-32 h-32 object-cover shadow-sm rounded-lg"
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
