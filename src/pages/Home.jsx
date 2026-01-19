import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
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
    0% { transform: translateY(0) scale(1); opacity: 0.4; }
    50% { opacity: 0.7; }
    100% { transform: translateY(-200vh) scale(1.5); opacity: 0; }
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

export default function Home() {
  const navigate = useNavigate();

  // Shared button styling so all buttons match perfectly
  const primaryButtonClass =
    `bg-secondary text-text font-bold py-2 px-6 rounded-lg
     border-2 border-transparent
     hover:bg-primary hover:text-white hover:border-white
     hover:scale-105 hover:shadow-lg
     transition duration-300`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <ScrollAnimation />
      <Navbar />

      {/* HERO */}
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

        <div className="max-w-5xl mx-auto px-4 py-12 text-white relative z-10">
          <div className="max-w-4xl mx-auto text-left">
            <h1
              className="text-3xl sm:text-4xl font-extrabold mb-3 animate-on-scroll"
              data-animation="fadeInLeft"
            >
              Better Projects. Better Risk Management. Better Results.
            </h1>

            <p
              className="text-sm sm:text-base text-white/90 mb-6 leading-relaxed animate-on-scroll"
              data-animation="fadeInLeft"
            >
              We help organisations modernise delivery, strengthen governance,
              and improve risk visibility through practical consulting,
              structured planning, and evidence-based decision making.
            </p>

            {/* Centered Explore Our Services button */}
            <div
              className="flex justify-center animate-on-scroll"
              data-animation="fadeInUp"
            >
              <button
                onClick={() => navigate("/services")}
                className={primaryButtonClass}
              >
                Explore Our Services
              </button>
            </div>

            {/* Solutions tiles under CTA */}
            <div
              className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll"
              data-animation="fadeInUp"
            >
              {/* OpsRisk */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h4 className="text-xl font-semibold text-text mb-2">
                  OpsRisk
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Practical, standards-aligned operational risk management with
                  minimal change footprint.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-5">
                  <li>• Lightweight and fast to implement</li>
                  <li>• Built on familiar tools and patterns</li>
                  <li>• Designed for real adoption</li>
                </ul>
                <div className="flex justify-center">
                  <button
                    onClick={() => navigate("/opsrisk")}
                    className={primaryButtonClass}
                  >
                    Learn about OpsRisk
                  </button>
                </div>
              </div>

              {/* AIRisk */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h4 className="text-xl font-semibold text-text mb-2">
                  AIRisk
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  AI-assisted risk insight introduced where maturity and
                  governance support it.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-5">
                  <li>• Explainable, transparent AI suggestions</li>
                  <li>• Humans remain in control</li>
                  <li>• Works alongside existing workflows</li>
                </ul>
                <div className="flex justify-center">
                  <button
                    onClick={() => navigate("/airisk")}
                    className={primaryButtonClass}
                  >
                    Learn about AIRisk
                  </button>
                </div>
              </div>
            </div>

            <p
              className="text-xs text-white/80 mt-5 leading-relaxed animate-on-scroll"
              data-animation="fadeInUp"
            >
              OpsRisk provides the operational risk foundation. AIRisk can be
              introduced later as an optional insight layer.
            </p>
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
                             hover:scale-105 transform cursor-pointer px-6 py-10
                             flex flex-col transition-all duration-300"
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
            entry.target.classList.add(className);
          } else {
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
